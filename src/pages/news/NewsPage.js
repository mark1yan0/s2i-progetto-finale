import React from 'react';
import Grid from '../../components/Articles/Grid';
import useLoading from '../../hooks/useLoading';
import { newsSelector } from '../../services/newsSlice';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';

const NewsPage = () => {
  const [loading, hasErrors, snackbar] = useLoading(newsSelector);
  return (
    <div className='page-wrapper'>
      <h1>NewsPage</h1>
      {loading && <Skeleton type='box' height='100vh' />}
      {snackbar && <SnackBar type='error' message='Could not load news' />}
      {!loading && !hasErrors && <Grid country='it' size='9' filters />}
    </div>
  );
};

export default NewsPage;
