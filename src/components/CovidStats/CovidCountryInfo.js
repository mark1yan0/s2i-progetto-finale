import React from 'react';

const CovidCountryInfo = ({ country, population }) => {
  return (
    <div>
      <h1 className=''>
        Paese: <strong className='text-xl'>{country}</strong>
      </h1>
      <p>
        Popolazione: <strong>{population}</strong>
      </p>
    </div>
  );
};

export default CovidCountryInfo;
