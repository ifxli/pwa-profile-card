import React, { useEffect } from 'react'
import * as d3 from 'd3'
import './SGCategoryBar.css';

const SGCategoryBar = ({ category }) => {
  const name = category.SG_Category_Detail
  const value = category["avg-SG-per-round"]
  const startColor = '#56A7FF'
  const endColor = '#007AFF'
  useEffect(() => {
    var g = d3.select(`#gradient${name}`)
    var defs = g.append('defs')

    var gradient = defs.append("linearGradient")
      .attr("id", `svgGradient${name}`)
      .attr("x1", "0%")
      .attr("x2", "100%")

    gradient.append("stop")
      .attr("offset", "0%")
      .attr("stop-color", value > 0 ? startColor : endColor)

    gradient.append("stop")
      .attr("offset", "100%")
      .attr("stop-color", value > 0 ? endColor : startColor)

    let width = Math.abs(value) * 100 / 3
    if (Math.abs(value) > 3) {
      width = 100
    }

    g.append('rect')
      .attr('fill', `url(#svgGradient${name})`)
      .attr('x', value > 0 ? 0 : (width * -1))
      .attr('y', 0)
      .attr('rx', 2)
      .attr('ry', 2)
      .attr('width', width)
      .attr('height', 8);
  })

  let scaleBars = [];
  for (let i = 1; i < 8; i++) {
    scaleBars.push(<rect width={2} height={8} x={25 * i - 1} fill='#FFF' key={i}/>)
  }

  return (
    <div className="category-bar">
      <div className="sg-left">{name}</div>
      <svg width={200} height={16}>
        <g transform={`translate(0, 4)`}>
          <rect width={200} height={8} fill='#DADEE2' rx={2} ry={2} />
          {scaleBars.map(element => {
            return element;
          })}
        </g>
        <g id={`gradient${name}`} transform={`translate(100, 4)`}></g>
        <g transform={`translate(0, 2)`}>
          <rect width={2} height={12} x={99} fill='#000' />
        </g>
      </svg>
      <div className="sg-right">{value}</div>
    </div>
  )
}

export default SGCategoryBar;
