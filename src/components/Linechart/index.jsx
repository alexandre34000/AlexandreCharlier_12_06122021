import { useEffect } from "react"
import * as d3 from "d3";
import PropTypes from "prop-types";

const LineChart = ({ propsDataAverage }) => {

    useEffect(() => {
        if (propsDataAverage) {
            const dataAverage = propsDataAverage.data.sessions;
            draw(dataAverage);
        }

    }, [propsDataAverage]);

    const draw = (dataAverage) => {

        const parentWidth = document.getElementById("linechart").clientWidth;
        const parentHeight = document.getElementById("linechart").clientHeight;

        //set the dimensions and margin of the graph
        const margin = { top: 80, right: 30, bottom: 30, left: 30 };
        const width = parentWidth - margin.left - margin.right;
        const height = parentHeight - margin.top - margin.bottom;

        const dayLetter = ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"]
        var linear = 100;

        // set the ranges of y for day of weeks
        const xScale = d3.scaleLinear()
            .domain([dataAverage[0].day, dataAverage.length])  // rajouter +1 a la longeur pour afficher le dim
            .range([0, width]); // largeur du graph sur x

        // set the ranges of y for sessions time
        const yScale = d3.scaleLinear()
            .domain([d3.min(dataAverage, d => d.sessionLength) , d3.max(dataAverage, d => d.sessionLength)]) // scale range of data y
            .range([height, 0]);// hauteur du gaph sur y

        // define the line
        const line = d3.line()
            .x((d) => xScale(d.day))
            .y((d) => yScale(d.sessionLength))
            .curve(d3.curveCardinal);

        //cleaning svg on the node DOM with parent's id #barchart
        var linechartContainer = d3.select("#linechart");
        linechartContainer.selectAll("*").remove();

        //create svg on the node DOM with parent's id #barchart
        const linechartSvg = linechartContainer.append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        //creation du linear gradient
        // Create the svg:defs element and the main gradient definition.
        const svgDefs = linechartSvg.append('defs');
        var mainGradient = svgDefs.append('linearGradient')
            .attr('id', 'mainGradient');

        // Create the stops of the main gradient. Each stop will be assigned
        // a class to style the stop using CSS.

        mainGradient.append('stop')
            .attr('class', 'stop-left')
            .attr('offset', '0%');

        var gradient = mainGradient.append('stop')
            .attr('class', 'stop-left')
            .attr('offset', `${linear}%`);

        mainGradient.append('stop')
            .attr('class', 'stop-right')
            .attr('offset', '0%');

        mainGradient.append('stop')
            .attr('class', 'stop-right')
            .attr('offset', '100%');

        linechartSvg.append('rect')
            .classed('filled', true)
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', width + margin.left)
            .attr('height', height + margin.top + margin.bottom);

        //create legend
        linechartSvg.append("text")
            .attr("class", "line-chart__legend")
            .attr("x", 5)
            .attr("y", margin.top / 4)
            .text("Durée moyenne des sessions")
            .style("font-size", "1.5rem")
            .attr("alignment-baseline", "middle")
            .style("fill", "white");

        // creation du tableau et décalage au centre
        const lineChart = linechartSvg.append("g")
           // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
           .attr("transform", "translate(" + margin.left + "," + (margin.top - 20) + ")");

        //define the line curve for the first line
        lineChart.append("path")
            .data(dataAverage)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 2)
            .attr("class", "line")
            .attr("d", line(dataAverage));

        //scale or legend of x Axis
        const xAxisGenerator = g => g
            .attr("class", "linechart-xAxis")
            .attr("transform", "translate(0," + (height + 20) + ")") //deplacement vers le bas de l'abscisse
            .style("font-size", "12px")
            .style("color", 'white')
            .call(d3.axisBottom(xScale).ticks(5).tickSize(0).tickFormat((d, i) => dayLetter[i]))//remove little tick foward legend tickSizeInner or ticksSizeOuter   .tickSize(0) .tickFormat(d3.format(".0"))  .tickSize(0).tickFormat(d3.format(".1"))
            .call(g => g.select(".domain").remove()); // remove the horizontal line forward legend

        // scale or legend of y axis
        const yAxisGenerator = g => g
            .attr("class", "linechart-yAxis")
            .attr("transform", "translate(" + width + ",0)")// only for rigth ordonnée is on left by default
            .style("font-size", "12px")
            .style("color", 'white')
            .call(d3.axisLeft().scale(yScale)) // put the legend at right to bar y .tickSizeOuter(-500).tickSizeInner(0)   .tickFormat(d3.format(".2")).ticks(2).tickSize(-width)

        //create  line  on vertical 
        const axisLine = linechartSvg
            .append("g")
            .append("rect")
            .attr("class", "dotted")
            .attr("stroke-width", "1px")
            .attr("width", ".5px")
            .attr("height", height + margin.top + margin.bottom)
            .style("opacity", "0")

        var focus = lineChart.append('g')
            .append('circle')
            .style("fill", "white")
            .attr("stroke", "black")
            .attr('r', 4)
            .style("opacity", 0);

        // div for tooltip
        const focusText = d3.select("#linechart").append("div")
            .attr("class", "focus-text")
            .style("opacity", 0);

        // Create a rect on top of the svg area: this rectangle recovers mouse position
        lineChart
            .append('rect')
            .style("fill", "none")
            .style("pointer-events", "all")
            .attr('width', width)
            .attr('height', height)
            .on('click', onclick)
            .on('mousemove', mousemove)
            .on('mouseout', mouseout);

        function mousemove(e) {
            var bisectDay = d3.bisector((d) => d.day).left;
            const mousePosition = d3.pointer(e)
            var currentX = xScale.invert(mousePosition[0]) + 1;
            var xCurve = bisectDay(dataAverage, currentX);
            var currentData = dataAverage.filter((d) => d.day === xCurve);
            if (currentX >= 1) {
                var yCurve = currentData[0].sessionLength;
                focus.style("opacity", "1")
                    .attr("cx", xScale(xCurve))
                    .attr("cy", yScale(yCurve));
                axisLine.attr("x", xScale(currentX))
                    .style("opacity", "1");
                focusText.html(function () {
                    return (`<p>${currentData[0].sessionLength}min</p>`);
                }).style("opacity", "1")
                    .style("left", xScale(xCurve) + 30 + "px")
                    .style("top", yScale(yCurve) + 60 + "px")
                    .style("border-radius", "2px");

                var rec = width + margin.left
                linear = ((xScale(currentX) / rec) * 100);
                gradient.attr('offset', `${linear}%`);
            }
        }

        function mouseout() {
            focus.style("opacity", 0)
            focusText.style("opacity", 0)
            axisLine.style("opacity", 0)
        }

        //add the y Axis
       // lineChart.append("g").call(yAxisGenerator);

        //add the x Axis
        lineChart.append("g").call(xAxisGenerator);
    }

    return (
        <div className="line-chart" id="linechart">
        </div>
    )
}

LineChart.propTypes={
    propsDataAverage: PropTypes.object
}

export default LineChart