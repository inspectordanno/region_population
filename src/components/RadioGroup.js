import React from 'react';
import colors from '../colors'

const RadioGroup = ({ region, regionLabel, regionData, handleOnChange }) => {

  //helper function that changes the label to black or gray if it is selected
  const determineLabelColor = (regionName) => {
    return {
      color: regionData.name === region ? 'black' : colors.darkGray
    }
  };

  return (
    <div className="radioButtons__group">
      <label className="radioButtons__label">
        <div 
          style={determineLabelColor(region)}
        >
          {regionLabel}
        </div>
        <input 
          type="radio" 
          value={region} 
          checked={regionData.name === region} //check radio button if value of input matches data state; otherwise, uncheck
          onChange={handleOnChange}
        />
      </label>
    </div>
  );
}

export default RadioGroup;

