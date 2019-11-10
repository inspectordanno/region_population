//referred to http://bl.ocks.org/mbostock/5100636 and https://codesandbox.io/s/react-d3-arc-ht2wl

import React from 'react';
import { arc, scaleSqrt } from 'd3';

const Arc = ({ width, population, endAngle, fill }) => {

  const circleStrokeWidth = 20;

  //using square root scale because circumference of circle is proportional to square of radius
  //https://observablehq.com/@d3/continuous-scales
  const radiusScale = scaleSqrt()
    .domain([0, 6000])
    .range([0, width * .5 - circleStrokeWidth]) //max of range is equal to max inner radius + 10

  const innerRadius = radiusScale(population); 
  const outerRadius = innerRadius + circleStrokeWidth; //outerRadius is always 10 more than inner radius

  //arc draws from top
  const startAngle = 0;

  const arcGenerator = arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)
    .startAngle(startAngle)
    .endAngle(endAngle);

  return (
    <path d={arcGenerator()} fill={fill} />
  );
}

export default Arc;