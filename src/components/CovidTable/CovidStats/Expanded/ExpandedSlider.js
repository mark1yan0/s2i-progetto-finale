import React from 'react';
import Slider from '@farbenmeer/react-spring-slider';
import Skeleton from '../../../Skeleton';

const ExpandedSlider = ({ covidStats, formatNumbers, loading }) => {
  return (
    <div style={{ height: 310, width: '100%' }} className='sm:hidden'>
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
                <td className='covid-stats text-red-600'>
                  {loading ? (
                    <Skeleton type='text' />
                  ) : (
                    formatNumbers(covidStats?.cases?.new)
                  )}
                </td>
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
                <td className='covid-stats '>
                  {loading ? (
                    <Skeleton type='text' />
                  ) : (
                    formatNumbers(covidStats?.deaths?.new)
                  )}
                </td>
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
        </div>

        <div>
          <table className='flex flex-col items-center'>
            <thead>
              <tr className='font-normal'>
                <th className='text-center'>Positivi Attivi</th>
              </tr>
            </thead>
            <tbody>
              <tr className='text-3xl font-bold'>
                <td className='covid-stats text-red-600'>
                  {loading ? (
                    <Skeleton type='text' />
                  ) : (
                    formatNumbers(covidStats?.cases?.active)
                  )}
                </td>
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
                <td className='covid-stats '>
                  {loading ? (
                    <Skeleton type='text' />
                  ) : (
                    formatNumbers(covidStats?.deaths?.total)
                  )}
                </td>
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
                <td className='covid-stats text-red-600'>
                  {loading ? (
                    <Skeleton type='text' />
                  ) : (
                    formatNumbers(covidStats?.cases?.total)
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Slider>
    </div>
  );
};

export default ExpandedSlider;
