import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { covidSelector, fetchCovidStats } from '../../services/covidSlice';
//components
import Expanded from './CovidStats/Expanded/Expanded';
import Compact from './CovidStats/Compact/Compact';
import SnackBar from '../SnackBar';

const CovidTable = ({ expanded }) => {
  const dispatch = useDispatch();
  const { covidStats, full, loading, hasErrors } = useSelector(covidSelector);

  useEffect(() => {
    if (full) return;
    dispatch(fetchCovidStats('italy')); //country in english
  }, [full, dispatch]);

  return (
    <section className='w-full bg-secondary-dark py-1 md:py-6 my-2'>
      {hasErrors && <SnackBar type='error' message='Could not load data' />}
      {expanded ? (
        <Expanded covidStats={covidStats} loading={loading} />
      ) : (
        // compact table
        <Compact covidStats={covidStats} loading={loading} />
      )}
    </section>
  );
};

export default CovidTable;
