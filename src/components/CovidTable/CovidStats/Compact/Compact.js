import React from 'react';
import uuid from 'react-uuid';
import CompactSlider from './CompactSlider';
import formatNumbers from '../../../../utilities/formatNumbers';
import CovidCountryInfo from '../CovidCountryInfo';
import Search from '../../../Search';
import Skeleton from '../../../Skeleton';

const Compact = ({ covidStats, loading }) => {
  return (
    <div className='relative px-1 md:px-10' key={uuid()}>
      <div className='pb-6 flex justify-between items-center'>
        <CovidCountryInfo
          country={covidStats?.country}
          population={formatNumbers(covidStats?.population)}
        />
        <Search />
      </div>

      {/* responsive slider */}
      <CompactSlider
        covidStats={covidStats}
        formatNumbers={formatNumbers}
        loading={loading}
      />

      {/* desktop view */}
      <table className='w-full hidden sm:table'>
        <thead>
          <tr className='font-normal'>
            <th className='text-center'>Nuovi Positivi</th>
            <th className='text-center'>Decessi Odierni</th>
            <th className='text-center'>Totale Guariti</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-3xl font-bold'>
            <td className='covid-stats text-red-600'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.cases?.new)
              )}
            </td>
            <td className='covid-stats'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.deaths?.new)
              )}
            </td>
            <td className='covid-stats text-green-600'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.cases?.recovered)
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {loading ? (
        <Skeleton type='text' />
      ) : (
        <p className='covid-stats-date'>{covidStats.day}</p>
      )}
    </div>
  );
};

export default Compact;
