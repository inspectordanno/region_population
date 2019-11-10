import React, { useState } from 'react';
import RadioGroup from './RadioGroup';

const RadioButtons = ({ regionData, handleOnChange }) => { 
  
  return (
    <div className="radioButtons">
      {/* <h2 className="RadioButtons__title">
        Select a country.
      </h2> */}
      <form 
        className="radioButtons__form"
        onSubmit={(e) => e.preventDefault()}
      >
        <RadioGroup 
          region="africa"
          regionLabel="AFRICA"
          regionData={regionData}
          handleOnChange={handleOnChange}
        />
        <RadioGroup 
          region="latin_america"
          regionLabel="LATIN AMERICA AND THE CARIBBEAN"
          regionData={regionData}
          handleOnChange={handleOnChange}
        />
        <RadioGroup 
          region="asia"
          regionLabel="ASIA"
          regionData={regionData}
          handleOnChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default RadioButtons;