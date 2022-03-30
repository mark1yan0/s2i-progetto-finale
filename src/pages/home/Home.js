import React from 'react';
//components
import NewsSlider from './NewsSlider/NewsSlider';
import CovidTable from '../../components/CovidTable/CovidTable';
import Grid from '../../components/Articles/Grid';
import { newsSelector } from '../../services/newsSlice';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';
import useLoading from '../../hooks/useLoading';

const Home = () => {
  const [loading, hasErrors, snackbar] = useLoading(newsSelector);

  return (
    <>
      {loading && <Skeleton type='box' height={600} />}
      {snackbar && (
        <SnackBar
          type='error'
          message="C'è stato un problema nel caricaro lo Slider"
        />
      )}
      {!loading && !hasErrors && <NewsSlider />}
      <div className='page-wrapper'>
        <CovidTable />
        {loading && <Skeleton type='box' height='100vh' />}
        {snackbar && (
          <SnackBar
            type='error'
            message="C'è stato un problema nel caricare le notizie"
          />
        )}
        {!loading && <Grid country='it' category size='3' />}
      </div>
    </>
  );
};

export default Home;
