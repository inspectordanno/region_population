import React from 'react';
import numeral from 'numeral';
import colors from '../colors';

const Arrow = ({ width, height, urbanPeople }) => {

  return (
    <svg width={width} height={height}>
      <defs>
        <marker 
          id="arrowhead" 
          markerWidth="2" 
          markerHeight="2"
          orient="auto"
          refX="0"
          refY="1"
        >
          <polygon points="0 0, 2 1, 0 2" fill={colors.orange}  />
        </marker>
      </defs>
      <line 
        x1="0" 
        y1={height * .5}
        x2={width * .8}
        y2={height * .5}
        stroke="#000" 
        strokeWidth="20" 
        markerEnd="url(#arrowhead)" 
        stroke={colors.orange}
      />
      <text
        x={width * .4}
        y={height * .5 + 5}
        textAnchor={'middle'}
        className={'arrow__text'}
      >
        <tspan
          className={'arrow__tspan_num'}
        >
          +{numeral(urbanPeople).format('0,0.0')}M&nbsp;
        </tspan>
        <tspan
          className={'arrow__tspan_label'}
        >
          Urban People
        </tspan>
      </text>
    </svg>
  );
}

export default Arrow;