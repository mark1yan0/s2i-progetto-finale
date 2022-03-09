import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import CovidStatistic from '../CovidStatistic';

const CompactSlider = ({ covidStats, loading }) => {
  return (
    <div style={{ height: 100, width: '100%' }} className='mb-5 sm:hidden'>
      <Slider>
        <table className='flex flex-col items-center w-full'>
          <thead>
            <tr className='font-normal'>
              <th className='text-center'>Nuovi Positivi</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-3xl font-bold'>
              <CovidStatistic
                loading={loading}
                data={covidStats?.cases?.new}
                color='red'
              />
            </tr>
          </tbody>
        </table>

        <table className='flex flex-col items-center'>
          <thead>
            <tr className='font-normal'>
              <th className='text-center'>Decessi Odierni</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-3xl font-bold'>
              <CovidStatistic
                loading={loading}
                data={covidStats?.deaths?.new}
              />
            </tr>
          </tbody>
        </table>

        <table className='flex flex-col items-center'>
          <thead>
            <tr className='font-normal'>
              <th className='text-center'>Totale Guariti</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-3xl font-bold'>
              <CovidStatistic
                loading={loading}
                data={covidStats?.cases?.recovered}
                color='green'
              />
            </tr>
          </tbody>
        </table>
      </Slider>
    </div>
  );
};

export default CompactSlider;
