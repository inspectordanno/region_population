import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import regionDataset from '../data/regionDataset';
import Headline from './Headline';
import RadioButtons from './RadioButtons';
import SvgArc from './SvgArc';
import Percent from './Percent';
import Arrow from './Arrow';
import Source from './Source';

//helper function
//gets specific region data from regionDataset
  const getRegionData = (regionName) => {
    return regionDataset.find(region => region.name == regionName);
  };

const UrbanApp = () => {
  //this tracks the state of the region selected
  //the default region data is Africa
  const [regionData, setRegionData] = useState(getRegionData('africa'));

  const handleOnChange = (event) => {
    //filters the big dataset and returns the selected region's data
    //sets the regionData state
    setRegionData(getRegionData(event.target.value));
  };

  //animated components
  const AnimatedPercent = animated(Percent);

  //animates/interpolates the data
  const interpolateData = (data) => {
    const animatedData = useSpring({ number: data });
    //removes the decimal places when animating
    return animatedData.number.interpolate(num => Math.round(num));
  };

  //width/height of arc svg
  const arcDiameter = 400;

  const showBackgroundImage = () => {
    //hide geography on mobile portrait mode, otherwise show
    if (screen.width > 480) {
      return `url('./region_img/${regionData.name}.svg`; //image changes based on region selected
    } else if (screen.width <= 480) {
      return 'none';
    }
  }

  //css background-image property
  const backgroundImage = {
    backgroundImage: showBackgroundImage(),
    backgroundPosition: 'center', //centers image
    backgroundRepeat: 'no-repeat',
    backgroundSize: '85vw', //using vw to make size responsive
    backgroundAttachment: 'fixed'  //fixed to viewport (on mobile)
  }

  return (
    <div className="urban_app" style={backgroundImage}>
      <Headline />
      <RadioButtons regionData={regionData} handleOnChange={handleOnChange} />
      <div className="svg_arc_container">
        <SvgArc 
          width={arcDiameter}
          height={arcDiameter}
          year={1990}
          population={regionData.pop_1990}
          percentUrban={regionData.percent_urban_1990}
        />
        <SvgArc 
          width={arcDiameter}
          height={arcDiameter}
          year={2050}
          population={regionData.pop_2050}
          percentUrban={regionData.percent_urban_2050}
        />
      </div>
      <div className="arrow_container" style={{ width: 500 }}>
        <AnimatedPercent 
          percentUrban={interpolateData(regionData.percent_urban_1990)} />
        <Arrow width={250} height={100} urbanPeople={regionData.urban_people} />
        <AnimatedPercent 
          percentUrban={interpolateData(regionData.percent_urban_2050)} />
      </div>
      <Source />
    </div>
  );
}

export default UrbanApp;