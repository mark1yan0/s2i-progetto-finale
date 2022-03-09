import React from 'react';
import CompactSlider from './CompactSlider';
import CovidStatistic from '../CovidStatistic';
import CovidCountryInfo from '../CovidCountryInfo';
import Search from '../../../Search';
import Skeleton from '../../../Skeleton';

const Compact = ({ covidStats, loading }) => {
  return (
    <div className='relative px-5 md:px-10'>
      <div className='pb-6 flex flex-col sm:flex-row justify-between items-center'>
        <CovidCountryInfo
          country={covidStats?.country}
          population={covidStats?.population}
        />
        <Search />
      </div>

      {/* responsive slider */}
      <CompactSlider covidStats={covidStats} loading={loading} />

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
            <CovidStatistic
              loading={loading}
              data={covidStats?.cases?.new}
              color='red'
            />
            <CovidStatistic loading={loading} data={covidStats?.deaths?.new} />
            <CovidStatistic
              loading={loading}
              data={covidStats?.cases?.recovered}
              color='green'
            />
          </tr>
        </tbody>
      </table>
      <div className='covid-stats-date'>
        {loading ? (
          <Skeleton type='text' align='right' />
        ) : (
          <p className='text-right'>{covidStats?.day}</p>
        )}
      </div>
    </div>
  );
};

export default Compact;
