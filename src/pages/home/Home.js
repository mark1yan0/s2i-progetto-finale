import React from 'react';
//components
import NewsSlider from './NewsSlider/NewsSlider';
import CovidTable from '../../components/CovidStats/CovidTable';
import Grid from '../../components/Articles/Grid';
import { useSelector } from 'react-redux';
import { newsSelector } from '../../services/newsSlice';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';

const Home = () => {
  const { loading, hasErrors } = useSelector(newsSelector);

  return (
    <>
      {loading && <Skeleton type='box' />}
      {hasErrors && <SnackBar type='error' message='Could not load Slider' />}
      {!loading && !hasErrors && <NewsSlider />}
      <div className='page-padding mt-6'>
        <CovidTable />
        {loading && <Skeleton type='box' />}
        {hasErrors && <SnackBar type='error' message='Could not load news' />}
        {!loading && !hasErrors && <Grid country='it' category size='3' />}
      </div>
    </>
  );
};

export default Home;
