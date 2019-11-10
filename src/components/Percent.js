import React from 'react';

const Percent = ({ percentUrban }) => (
  <div>
    <div className='percent__number'>
      {percentUrban}%
    </div>
    <div className="percent__label">
      Urban
    </div>
  </div>
);

export default Percent;