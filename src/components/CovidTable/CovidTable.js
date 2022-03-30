import React from 'react';
//redux
import { useSelector } from 'react-redux';
import { covidSelector } from '../../services/covidSlice';
//components
import Expanded from './CovidStats/Expanded/Expanded';
import Compact from './CovidStats/Compact/Compact';
import SnackBar from '../SnackBar';

const CovidTable = ({ expanded }) => {
  const { covidStats, loading, hasErrors } = useSelector(covidSelector);
  return (
    <section className='w-full bg-secondary-dark py-1 md:py-6 my-2'>
      {hasErrors && <SnackBar type='error' message="C'è stato un problema" />}
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
