import React from 'react';
import { useSelector } from 'react-redux';
import { covidSelector } from '../../../services/covidSlice';
import Skeleton from '../../Skeleton';
import formatNumbers from '../../../utilities/formatNumbers';

const CovidCountryInfo = ({ country, population }) => {
  const { loading } = useSelector(covidSelector);
  return (
    <div className='w-full sm:w-1/2'>
      {loading ? (
        <Skeleton type='text' />
      ) : (
        <h1 className='flex items-center'>
          Paese:&nbsp;
          <strong className='text-xl'>{country}</strong>
        </h1>
      )}

      {loading ? (
        <Skeleton type='text' />
      ) : (
        <p className='flex items-center'>
          Popolazione:&nbsp;
          <strong>{formatNumbers(population)}</strong>
        </p>
      )}
    </div>
  );
};

export default CovidCountryInfo;
