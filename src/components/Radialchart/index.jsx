import * as d3 from "d3";
import { useEffect } from "react";
import PropTypes from "prop-types";

const RadialChart = ({ propsDataRadial }) => {

    const dataRadial = propsDataRadial.data

    useEffect(() => {
        draw();
    })

    function draw() {

        const parentWidth = document.getElementById("radialchart").clientWidth;
        const parentHeight = document.getElementById("radialchart").clientHeight;

        //set the dimensions and margin of the graph
        const margin = { top: 10, right: 10, bottom: 10, left: 10 };
        const width = parentWidth - margin.left - margin.right;
        const height = parentHeight - margin.top - margin.bottom;

        // parameter of circle
        const radialParam = {
            PI: Math.PI,
            arcMinRadius: 0.50 * Math.min(width, height) / 2,
            arcPadding: 2, //padding from outer
            size: Math.min(width, height),// width and height of svg
            arcMaxRadius: 0.80 * Math.min(width, height) / 2
        }

        const center = {
            x: radialParam.size / 2,
            y: (radialParam.size / 2 + margin.top)
        }

        const data = [
            {
                score: (dataRadial.score * 100)
            },
            {
                score: 100
            }
        ];

        const radialChartContainer = d3.select("#radialchart");
        radialChartContainer.selectAll("*").remove();

        const svg = radialChartContainer.append("svg")
            .attr("width", radialParam.size + margin.right + margin.left)
            .attr("height", radialParam.size + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + (center.x + margin.left) + " ," + (center.y + margin.top) + ")");

        radialChartContainer.append("div")
            .attr("class", "radial-text__score")
            .style("position", "absolute")
            .style("width", "100px")
            .style("top", ((center.y - 35) + "px"))
            .style("left", ((center.x - 35) + "px"))
            .html(`<p style="font-size: 2.6rem; font-weight:700">${data[0].score}%</p><p style="font-color: #74798C;">de votre objectif</p>`)

        svg.append("text")
            .attr("class", "radial-text__legend")
            .attr("x", (margin.left * 2 - center.x))
            .attr("y", (margin.top * 2 - center.y))
            .text("Score")
            .attr("alignment-baseline", "central");

        let scale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.score)])
            .range([0, 2 * radialParam.PI]);

        const numArcs = data.map((d, i) => d.name).length;
        const arcWidth = (radialParam.arcMaxRadius - radialParam.arcMinRadius - numArcs * radialParam.arcPadding) / numArcs;

        //create arc
        let arc = d3.arc()
            .innerRadius((d, i) => getInnerRadius(i))
            .outerRadius((d, i) => getOuterRadius(i))
            .startAngle(0)
            .endAngle((d, i) => -scale(d))
            .cornerRadius(10);

        let radialAxis = svg.append('g')
            .attr('class', 'r axis')
            .selectAll('g')
            .data(data)
            .enter().append('g');

        // create circle
        radialAxis.append('circle')
            .attr('r', (d, i) => getOuterRadius(i) + radialParam.arcPadding)
            .attr("class", (d, i) => `radialcircle${i}`);

        //data arcs
        let arcs = svg.append('g')
            .attr('class', 'data')
            .selectAll('path')
            .data(data)
            .enter().append('path')
            .attr('class', (d, i) => `arc${i}`);

        arcs.transition()
            .delay((d, i) => i * 200)
            .duration(1000)
            .attrTween('d', arcTween);

        function arcTween(d, i) {
            let interpolate = d3.interpolate(0, d.score);
            return t => arc(interpolate(t), i);
        }

        /**
         * Calc the inner radius for each circle
         * @param {number} index of circle
         * @returns number for innerRadius 
         */
        function getInnerRadius(index) {
            return radialParam.arcMinRadius + (numArcs - (index + 1)) * (arcWidth + radialParam.arcPadding);
        }

        /**
         * Calc the outer radius for each circle
         * @param {number} index of circle
         * @returns number for outer radius 
         */
        function getOuterRadius(index) {
            return getInnerRadius(index) + arcWidth;
        }

    }

    return (
        <div className="radial-chart" id="radialchart">
        </div>
    )
}

RadialChart.propTypes={
    propsData: PropTypes.object

}



export default RadialChart