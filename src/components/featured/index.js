import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Fit Fam Meal Prep</div>
      </div>
      <TimeUntil />
    </div>
  );
};

export default Featured;
