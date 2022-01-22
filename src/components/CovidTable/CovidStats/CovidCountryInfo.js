import React from 'react';
import { useSelector } from 'react-redux';
import { covidSelector } from '../../../services/covidSlice';
import Skeleton from '../../Skeleton';

const CovidCountryInfo = ({ country, population }) => {
  const { loading } = useSelector(covidSelector);
  return (
    <div>
      {loading ? (
        <Skeleton type='text' />
      ) : (
        <h1 className=''>
          Paese:
          <strong className='text-xl'>{country}</strong>
        </h1>
      )}
      {loading ? (
        <Skeleton type='text' />
      ) : (
        <p>
          Popolazione: <strong>{population}</strong>
        </p>
      )}
    </div>
  );
};

export default CovidCountryInfo;
