import React from 'react';
//components
import CovidTable from '../../components/CovidTable/CovidTable';
import Grid from '../../components/Articles/Grid';

const CovidPage = () => {
  return (
    <div className='w-full page-padding'>
      <h1>CovidPage</h1>

      <CovidTable expanded />
      <Grid country='it' size='6' />
    </div>
  );
};

export default CovidPage;
