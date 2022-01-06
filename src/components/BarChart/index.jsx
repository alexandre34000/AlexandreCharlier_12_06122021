import { useEffect } from "react"
import * as d3 from "d3";
import PropTypes from "prop-types";

const BarChart = ({ propsData }) => {

        useEffect(() => {
                drawBarChart(propsData);
        }, [propsData]);

        function drawBarChart(propsData) {
                const parentWidth = document.getElementById("barchart").clientWidth;
                const parentHeight = document.getElementById("barchart").clientHeight;
                const data = propsData.data.sessions;

                var arrayOfKilogram = [];
                //change format of date and build array of kilogram
                data.forEach((d) => {
                        d.day = d.day.slice(9, 10)
                        arrayOfKilogram.push(d.kilogram)
                })

                const diffKilogram = (Math.max(...arrayOfKilogram) - Math.min(...arrayOfKilogram))

                //set the dimensions and margin of the graph
                const margin = { top: 70, right: 60, bottom: 30, left: 60 };
                const width = parentWidth - margin.left - margin.right;
                const height = parentHeight - margin.top - margin.bottom;

                // set the ranges of x (abscisse)
                const x = d3.scaleBand()
                        .domain(data.map(d => d.day))
                        .range([0, width]) // largeur du graph sur x
                        .padding(0.9);// (0.9)

                // set the ranges of y for kilogram
                const y = d3.scaleLinear()
                        .domain([d3.min(data, d => d.kilogram) - 1, d3.max(data, d => d.kilogram)]) // range des valeurs sur y
                        .nice()
                        .range([height, 0])// hauteur du gaph sur y

                //set range of y1 for calories
                const y1 = d3.scaleLinear()
                        .domain([d3.min(data, d => d.calories) - 100, d3.max(data, d => d.calories) + 100])// range des valeurs sur y
                        .nice()
                        .range([height, 0]); // hauteur du gaph sur y1

                //scale or legend of x Axis
                const xAxis = g => g
                        .attr("class", "barchart-xAxis")
                        .attr("transform", `translate(0,${height + 5})`) //deplacement vers le bas de l'abscisse
                        .call(d3.axisBottom(x).tickSize(0))//remove little tick foward legend tickSizeInner or ticksSizeOuter
                        .call(g => g.select(".domain").remove()) // remove the horizontal line forward legend

                // scale or legend of y axis
                const yAxis = g => g
                        .attr("class", "barchart-yAxis")
                        .attr("transform", `translate(${width},0)`)
                        .style("font-size", "12px")
                        .call(d3.axisRight(y).tickFormat(d3.format(".2")).ticks(diffKilogram + 1).tickSize(-width)) // put the legend at right to bar y .tickSizeOuter(-500).tickSizeInner(0)
                        .call(g => g.select(".domain").remove()) // remove the vertical line forward legend

                //cleaning svg on the node DOM with parent's id #barchart
                var barchartContainer = d3.select("#barchart");
                barchartContainer.selectAll("*").remove();

                //create svg on the node DOM with parent's id #barchart
                const barchartSvg = barchartContainer.append("svg")
                        .attr("width", width + margin.left + margin.right)
                        .attr("height", height + margin.top + margin.bottom);


                //create legend
                barchartSvg.append("text").attr("x", margin.left).attr("y", margin.top / 4).text("Activité quotidienne").style("font-size", "1.5rem").attr("alignment-baseline", "central");
                barchartSvg.append("circle").attr("cx", width - 80).attr("cy", margin.top / 4).attr("r", 6).style("fill", "#E60000");
                barchartSvg.append("circle").attr("cx", width - 180).attr("cy", margin.top / 4).attr("r", 6).style("fill", "#E282D30");
                barchartSvg.append("text").attr("x", width - 70).attr("y", margin.top / 4).text("Calories brûlées (kCal)").style("font-size", "1.5rem").attr("alignment-baseline", "central").attr("class", "bar-chart__text-legend").style("text-anchor", "start");
                barchartSvg.append("text").attr("x", width - 170).attr("y", margin.top / 4).text("Poids (kg)").style("font-size", "1.5rem").attr("alignment-baseline", "central").attr("class", "bar-chart__text-legend").style("text-anchor", "start");

                const barchart = barchartSvg.append("g")
                        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

                // div for tooltip
                const tooltip = d3.select("#barchart").append("div")
                        .attr("class", "tooltip")
                        .style("opacity", 0);

                //init the container of the bars
                var barGroups = barchart.selectAll(null)
                        .data(data)
                        .enter();

                // bar representating the kilogram
                barGroups.append("rect")
                        .attr("class", "bar")
                        .style("fill", "#E282D30")
                        .attr("x", function (d) { return x(d.day) - 3; }) //position the bar by reference of the center
                        .attr("width", 5)//x.bandwidth()
                        .attr("y", function (d) { return y(d.kilogram); })
                        .attr("height", function (d) { return height - y(d.kilogram); });

                // bar representating the calories
                barGroups.append("rect")
                        .attr("class", "bar")
                        .style("fill", "#E60000")
                        .attr("x", function (d) { return x(d.day) + 8; })//position of the bar of calories
                        .attr("width", 5)//x.bandwidth()   width of the bar
                        .attr("y", function (d) { return y1(d.calories) })
                        .attr("height", function (d) { return (height) - y1((d.calories)); })

                //bar representating the kilogram and calories for hover
                barGroups.append("rect")
                        .attr("class", "barhover")
                        .attr("x", function (d) { return x(d.day) - 15; }) //position the bar by reference of the center
                        .attr("width", 40)//x.bandwidth() || 5
                        .attr("y", function (d) { return y(d3.max(data, d => d.kilogram)); })
                        .attr("height", function (d) { return height })
                        .on("mouseover", function (event, d) {
                                d3.selectAll(".barhover").style("opacity", 0);
                                d3.select(this)
                                        .transition()
                                        .duration(200)
                                        .style("opacity", "0.5");
                                tooltip.transition()
                                        .duration(200)
                                        .style("opacity", .9);
                                tooltip.html(function () {
                                        return (`<p>${d.kilogram}kg</p><p>${d.calories}kcal</p>`);
                                })
                                        .style("left", (90 + x(d.day)) + "px")     //event.pageX
                                        .style("top", (y(d.kilogram) + margin.top) + "px");
                        })
                        .on("mouseout", function (event, d) {
                                d3.selectAll(".barhover").style("opacity", 0);
                                tooltip.style("opacity", 0);

                        });

                //add the y Axis
                barchart.append("g").call(yAxis);

                //add the x Axis
                barchart.append("g").call(xAxis);



        }

        return (
                <div className="content-barchart" id="barchart" ></div>
        )
}

BarChart.propTypes = {
        propsData: PropTypes.object

}

export default BarChart
