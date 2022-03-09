import React from 'react';
import formatNumbers from '../../../utilities/formatNumbers';
import Skeleton from '../../Skeleton';

const CovidStatistic = ({ data, loading, color }) => {
  return (
    <td
      className={`covid-stats ${
        color === 'green'
          ? 'text-green-600'
          : color === 'red'
          ? 'text-red-600'
          : ''
      } `}
    >
      {loading ? (
        <Skeleton type='text' align='center' />
      ) : data ? (
        formatNumbers(data)
      ) : (
        <p className='text-sm text-black'>Dato ancora non disponibile</p>
      )}
    </td>
  );
};

export default CovidStatistic;
