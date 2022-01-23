import React, { useState, useEffect } from 'react';
//components
import NewsSlider from './NewsSlider/NewsSlider';
import CovidTable from '../../components/CovidTable/CovidTable';
import Grid from '../../components/Articles/Grid';
import { useSelector } from 'react-redux';
import { newsSelector } from '../../services/newsSlice';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';

const Home = () => {
  const { loading, hasErrors } = useSelector(newsSelector);

  const [snackbar, setSnackbar] = useState(false);
  useEffect(() => {
    if (hasErrors) {
      setSnackbar(true);
      setTimeout(() => setSnackbar(false), 2000);
    }
  }, []);

  return (
    <>
      {loading && <Skeleton type='box' />}
      {snackbar && <SnackBar type='error' message='Could not load Slider' />}
      {!loading && !hasErrors && <NewsSlider />}
      <div className='page-wrapper'>
        <CovidTable />
        {loading && <Skeleton type='box' />}
        {snackbar && <SnackBar type='error' message='Could not load news' />}
        {!loading && <Grid country='it' category size='3' />}
      </div>
    </>
  );
};

export default Home;
