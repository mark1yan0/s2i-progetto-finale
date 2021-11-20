import React from 'react';
//components
import CovidTable from '../../components/CovidStats/CovidTable';
import Grid from '../../components/Articles/Grid';

const CovidPage = () => {
  return (
    <div className='w-full page-padding'>
      <h1>CovidPage</h1>

      <CovidTable expanded />
      {/* <Grid country='it' category='sports' size='4' /> */}
    </div>
  );
};

export default CovidPage;
