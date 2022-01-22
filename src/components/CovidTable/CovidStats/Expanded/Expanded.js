import React from 'react';
import formatNumbers from '../../../../utilities/formatNumbers';
import ExpandedSlider from './ExpandedSlider';
import CovidCountryInfo from '../CovidCountryInfo';
import Search from '../../../Search';
import Skeleton from '../../../Skeleton';

const Expanded = ({ covidStats, loading }) => {
  return (
    <div className='relative px-1 md:px-10'>
      <div className='pb-6 flex justify-between items-center'>
        <CovidCountryInfo
          country={covidStats.country}
          population={formatNumbers(covidStats?.population)}
        />
        <Search />
      </div>

      <ExpandedSlider
        covidStats={covidStats}
        formatNumbers={formatNumbers}
        loading={loading}
      />

      <table className='w-full hidden sm:table'>
        {/* positivi */}
        <thead>
          <tr className='font-normal'>
            <th className='text-center'>Nuovi Positivi</th>
            <th className='text-center '>Positivi Attivi</th>
            <th className='text-center '>Totale Positivi</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-3xl text-red-600 font-bold'>
            <td className='text-center pb-12'>
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
                formatNumbers(covidStats?.cases?.active)
              )}
            </td>
            <td className='covid-stats'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.cases?.total)
              )}
            </td>
          </tr>
        </tbody>

        {/* decessi */}
        <thead>
          <tr className='font-normal'>
            <th className='text-center'>Decessi Odierni</th>
            <th className='text-center'>Totale Decessi</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-3xl font-bold'>
            <td className='covid-stats'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.deaths?.new)
              )}
            </td>
            <td className='covid-stats'>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                formatNumbers(covidStats?.deaths?.total)
              )}
            </td>
          </tr>
        </tbody>

        {/* guariti */}
        <thead>
          <tr className='font-normal'>
            <th className='text-center'>Totale Guariti</th>
          </tr>
        </thead>
        <tbody>
          <tr className='font-bold text-3xl'>
            <td className='text-center text-green-600'>
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
        <p className='covid-stats-date'>{covidStats?.day}</p>
      )}
    </div>
  );
};

export default Expanded;
