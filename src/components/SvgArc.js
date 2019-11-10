import React from 'react';
import numeral from 'numeral';
import { scaleLinear } from 'd3';
import { useSpring, animated } from 'react-spring';
import Arc from './Arc';
import colors from '../colors';
import Color from 'color';

const SvgArc = ({ width, height, year, population, percentUrban }) => {
  //https://tauday.com/tau-manifesto
  //tau represents 100% end angle
  const tau = Math.PI * 2; 

  //this scale takes the percent in the domain (0 to 100%)
  //and outputs an end angle from 0 to tau
  const endAngleScale = scaleLinear()
    .domain([0, 100])
    .range([0, tau]);

  const endAngle = endAngleScale(percentUrban);

  const x = width / 2;
  const y = width / 2;

  const populationProps = useSpring({ value: population, from: { value: 0 } });
  const endAngleProps = useSpring({ value: endAngle, from: { value: 0 }});
  const AnimatedArc = animated(Arc);

  //makes the colors 25% darker to account for the 25% increase in opacity
  //this returns it to the original color
  const darkerGray = Color(colors.darkGray).darken(.15);
  const darkerOrange = Color(colors.orange).darken(.15);

  return (
    <svg width={width} height={height} >
      {/* transforms arc position to the center */}
      <g transform={`translate(${x},${y})`} opacity={.75}>
        {/* gray arc */}
        <AnimatedArc 
          width={width} 
          population={populationProps.value} 
          endAngle={tau} 
          fill={darkerGray} />
         {/* orange arc */}
        <AnimatedArc 
          width={width} 
          population={populationProps.value} 
          endAngle={endAngleProps.value} 
          fill={darkerOrange} />
        <text textAnchor={'middle'} className="arc__text" y={-34} >
          <tspan x="0" className="arc__text_year">{year}</tspan>
          <tspan dy="1.2em" x="0">---------------</tspan>
          <tspan dy="1.2em" x="0" className="arc__text_label">Total Pop.</tspan>
          <tspan dy="1em" x="0" className="arc__text_pop">{numeral(population).format('0,0.0')}M</tspan>
        </text>
      </g>
    </svg>
  );
};

export default SvgArc;