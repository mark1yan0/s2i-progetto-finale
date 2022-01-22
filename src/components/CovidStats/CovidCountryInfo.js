import React from 'react';
import { useSelector } from 'react-redux';
import { covidSelector } from '../../services/covidSlice';
import Skeleton from '../Skeleton';

const CovidCountryInfo = ({ country, population }) => {
  const { loading } = useSelector(covidSelector);
  return (
    <div>
      <h1 className=''>
        Paese:{' '}
        <strong className='text-xl'>
          {loading ? <Skeleton type='text' /> : country}
        </strong>
      </h1>
      <p>
        Popolazione:{' '}
        <strong>{loading ? <Skeleton type='text' /> : population}</strong>
      </p>
    </div>
  );
};

export default CovidCountryInfo;
