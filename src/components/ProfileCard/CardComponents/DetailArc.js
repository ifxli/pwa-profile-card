import React from 'react'
import * as d3 from 'd3'

function DetailArc(props) {
  const { svgWidth, arcWidth, progressPercentage, colorIndicator } = props
  const svgHeight = svgWidth
  const arcOuterRadius = svgWidth / 2
  const arcInnerRadius = svgWidth / 2 - arcWidth
  const arcGenerator = d3.arc()
    .innerRadius(arcInnerRadius)
    .outerRadius(arcOuterRadius)
    .startAngle(0)
    .cornerRadius(5)
  const detailArc = (value) => arcGenerator({ endAngle: 2 * Math.PI * value})

  return (
    <div>
      <svg height={svgHeight} width={svgWidth}>
        <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
          <path d={detailArc(1)} opacity='0.2' fill='#E6E8EB' />
        </g>
        <g transform={`translate(${svgWidth / 2}, ${svgHeight / 2})`}>
          <path d={detailArc(progressPercentage / 100)} fill={colorIndicator} />
        </g>
      </svg>
    </div>
  )
}

export default DetailArc
