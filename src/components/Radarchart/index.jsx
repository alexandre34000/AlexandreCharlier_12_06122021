import { useEffect } from "react";
import * as d3 from "d3";
import PropTypes from "prop-types";

const RadarChart = ( {propsDataPerformance} ) => {
    const dataPerformance = propsDataPerformance.data;
    
    useEffect(() => {
        draw(dataPerformance)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataPerformance]);

    function draw(data) {

        const parentWidth = document.getElementById("radarchart").clientWidth;
        const parentHeight = document.getElementById("radarchart").clientHeight;

        //set the dimensions and margin of the graph
        const margin = { top: 5, right: 5, bottom: 5, left: 5 };
        const width = parentWidth - margin.left - margin.right;
        const height = parentHeight - margin.top - margin.bottom;
        const nbSides = Object.keys(data.kind).length  

        const polyParam = {
            nbLevel: 5,  
            offset: Math.PI, 
            size: Math.min(width, height),
            polyangle: (Math.PI * 2) / nbSides, 
            r_0: 0.70 * Math.min(width, height) / 2 
        }

        // coordonate of center 
        const center = {
            x: polyParam.size / 2,
            y: polyParam.size / 2
        }

        const radarChartContainer = d3.select("#radarchart");
        radarChartContainer.selectAll("*").remove();

        const wrapperSvg = radarChartContainer.append("svg")
            .attr("width", polyParam.size + margin.right + margin.left)
            .attr("height", polyParam.size + margin.top + margin.bottom);

        const g = wrapperSvg.append("g").attr("transform", "translate( 0 ," + margin.top * 2 + ")");

        const scale = d3.scaleLinear()
            .domain([0, d3.max(dataPerformance.data, d => d.value)])
            .range([0, polyParam.r_0]);

        /**
         * Generate coordonate of vertex's polygon
         * @param {number} length The lenght of hypothenus.
         * @param {number} angle The second number to add.
         * @return {object} The result it's point of vertex.
         */
        const generatePoint = ({ length, angle }) => {
            const point = {
                x: center.x + (length * Math.sin(polyParam.offset - angle)),
                y: center.x + (length * Math.cos(polyParam.offset - angle))
            };
            return point;
        }

        /** 
         * Draw the line between two points (vertex) of polygon
         * @param {number} points an array of vertex.
         * @param {DOM} parent The parent container.
         */
        const drawPath = (points, parent) => {
            const lineGenerator = d3.line()
                .x(d => d.x)
                .y(d => d.y);

            parent.append("path").attr("d", lineGenerator(points))
        };

        /** 
         * Generate and draw multi-levels of polygon
         * @param {number} levelsCount the number of level.
         * @param {number} sideCount The number of polygon's side.
         */
        const generateAndDrawLevels = (levelsCount, sideCount) => {
            for (let level = 1; level <= levelsCount; level++) {
                const hyp = (level / levelsCount) * polyParam.r_0;
                const points = [];
                for (let vertex = 0; vertex < sideCount; vertex++) {
                    const theta = vertex * polyParam.polyangle;
                    points.push(generatePoint({ length: hyp, angle: theta }));
                }
                const group = g.append("g").attr("class", "levels")
                    .attr("fill", "none")
                    .attr("stroke", "white")
                    .attr("stroke-width", 2);
                drawPath([...points, points[0]], group);
            }
        };

       /** 
       * Display a circle for each point end
       * @param {array} points array of object.
       */
        const drawCircles = (points => {
            g.append("g")
                .attr("class", "indic")
                .selectAll("circle")
                .data(points)
                .enter()
                .append("circle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", 1)
                .attr("fill", "red")
        });

       /** 
       * Build and display the graph of data
       * @param {array<Object>} dataset The number of polygon's side.
       * @param {number} n number of face 
       */
        const drawData = (dataset, n) => {
            const points = [];
            dataset.forEach((d, i) => {
                const len = scale(d.value);
                const theta = i * (2 * Math.PI / n);
                points.push(
                    {
                        ...generatePoint({ length: len, angle: theta }),
                        value: d.value
                    });
            });

            const group = g.append("g").attr("class", "shape")
                .attr("fill", "red")
                .style("opacity", 0.7);

            drawPath([...points, points[0]], group);
            drawCircles(points);
        };

        /** 
       * Build data for assign name and value 
       * @return {array<Object>} object with name and value for each kind
       */
        const generateData = () => {
            const dataD = [];
            dataPerformance.data.forEach((v) => {
                let kind = v.kind
                return dataD.push(
                    {
                        name: Object.entries(dataPerformance.kind)
                            .filter(([k, v]) => k === kind.toString())
                            .map((v) => v[1]),
                        value: v.value
                    }
                );
            })
            return dataD;
        };

        /** 
       * Display the text legend 
       * @param {string} text 
       * @param {array<object>} point coordonate x and y
       * @param {Dom} group parent dom
       */
        const drawText = (text, point, group) => {
            group.append("text")
                .attr("x", point.x)
                .attr("y", point.y)
                .html(text)
                .attr("fill", "white")
                .style("text-anchor", "middle")
                .style("font-size", "12px")
                .style("font-family", "sans-serif")      
        };

         /** 
       * Build the text legend 
       * @param {number} sideCount nb of face's polygon 
       * @param {array<object>} dataset c
       */
        const drawLabels = (dataset, sideCount) => {
            const groupL = g.append("g").attr("class", "labels")
            for (let vertex = 0; vertex < sideCount; vertex++) {
                const angle = vertex * polyParam.polyangle;
                const label = dataset[vertex].name;
                const point = generatePoint({ length: 0.9 * (polyParam.size / 2), angle });
                drawText(label, point, groupL);
            }
        };

        const dataset = generateData();
        generateAndDrawLevels(polyParam.nbLevel, nbSides);
        drawData(dataset, nbSides);
        drawLabels(dataset, nbSides);
    }

    return (
        <div className="radar-chart" id="radarchart">
        </div>
    )
}

RadarChart.propTypes={
    propsData: PropTypes.object

}

export default RadarChart

