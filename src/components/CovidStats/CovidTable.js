import React, { useEffect } from 'react';
import uuid from 'react-uuid';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { covidSelector, fetchCovidStats } from '../../services/covidSlice';
//components
import CovidCountryInfo from './CovidCountryInfo';
import Search from '../Search';

const CovidTable = ({ expanded }) => {
  const dispatch = useDispatch();
  const { covidStats, loading, hasErrors } = useSelector(covidSelector);

  useEffect(() => {
    if (covidStats.length !== 0) return;
    dispatch(fetchCovidStats('italy')); //country in english
  }, [dispatch, covidStats.length]);

  function formatNumbers(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  return (
    <section className='w-full bg-secondary-dark py-6 my-2'>
      {loading && <p>Loading ...</p>}
      {hasErrors && <p>Theres an error</p>}
      {expanded
        ? covidStats?.map(data => {
            // expanded table
            return (
              <div className='relative' key={uuid()}>
                <div className='px-6 pb-6 flex justify-between items-center'>
                  <CovidCountryInfo
                    country={data.country}
                    population={formatNumbers(data.population)}
                  />
                  <Search />
                </div>

                <table className='w-full'>
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
                        {formatNumbers(data.cases.new)}
                      </td>
                      <td className='covid-stats'>
                        {formatNumbers(data.cases.active)}
                      </td>
                      <td className='covid-stats'>
                        {formatNumbers(data.cases.total)}
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
                        {formatNumbers(data.deaths.new)}
                      </td>
                      <td className='covid-stats'>
                        {formatNumbers(data.deaths.total)}
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
                        {formatNumbers(data.cases.recovered)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='covid-stats-date'>{data.day}</p>
              </div>
            );
          })
        : covidStats?.map(data => {
            return (
              // compact table
              <div className='relative' key={uuid()}>
                <div className='px-10 pb-6 flex justify-between items-center'>
                  <CovidCountryInfo
                    country={data.country}
                    population={formatNumbers(data.population)}
                  />
                  <Search />
                </div>

                <table className='w-full'>
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
                        {formatNumbers(data.cases.new)}
                      </td>
                      <td className='covid-stats'>
                        {formatNumbers(data.deaths.new)}
                      </td>
                      <td className='covid-stats text-green-600'>
                        {formatNumbers(data.cases.recovered)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className='covid-stats-date'>{data.day}</p>
              </div>
            );
          })}
    </section>
  );
};

export default CovidTable;
