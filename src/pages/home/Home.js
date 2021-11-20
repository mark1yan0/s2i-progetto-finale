import React from 'react';
//components
import NewsSlider from './NewsSlider/NewsSlider';
import CovidTable from '../../components/CovidStats/CovidTable';
import Grid from '../../components/Articles/Grid';

const Home = () => {
  return (
    <>
      {/* <NewsSlider /> */}
      <div className='page-padding mt-6'>
        <CovidTable />
        <Grid country='it' category size='3' />
      </div>
    </>
  );
};

export default Home;
