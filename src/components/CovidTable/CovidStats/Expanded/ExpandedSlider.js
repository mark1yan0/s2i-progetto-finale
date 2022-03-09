import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import CovidStatistic from '../CovidStatistic';

const ExpandedSlider = ({ covidStats, loading }) => {
  return (
    <div style={{ height: 310, width: '100%' }} className='mb-5 sm:hidden'>
      <Slider auto='5000'>
        <div>
          <table className='flex flex-col items-center'>
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
              <tr className='text-3xl font-bold text-green-600'>
                <CovidStatistic
                  loading={loading}
                  data={covidStats?.cases?.recovered}
                  color='green'
                />
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <table className='flex flex-col items-center'>
            <thead>
              <tr className='font-normal'>
                <th className='text-center'>Positivi Attivi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-3xl font-bold text-red-600'>
                <CovidStatistic
                  loading={loading}
                  data={covidStats?.cases?.active}
                  color='red'
                />
              </tr>
            </tbody>
          </table>

          <table className='flex flex-col items-center'>
            <thead>
              <tr className='font-normal'>
                <th className='text-center'>Totale Decessi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-3xl font-bold'>
                <CovidStatistic
                  loading={loading}
                  data={covidStats?.deaths?.total}
                />
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <table className='flex flex-col items-center'>
            <thead>
              <tr className='font-normal'>
                <th className='text-center'>Totale Positivi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-3xl font-bold'>
                <CovidStatistic
                  loading={loading}
                  data={covidStats?.cases?.total}
                  color='red'
                />
              </tr>
            </tbody>
          </table>
        </div>
      </Slider>
    </div>
  );
};

export default ExpandedSlider;
