import React from 'react';
import Grid from '../../components/Articles/Grid';
import useLoading from '../../hooks/useLoading';
import { newsSelector } from '../../services/newsSlice';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';
import Search from '../../components/Search';

const NewsPage = () => {
  const [loading, snackbar] = useLoading(newsSelector);
  return (
    <div className='page-wrapper'>
      <Search type='news' />
      {loading && <Skeleton type='box' height='100vh' />}
      {snackbar && <SnackBar type='error' message='Could not load news' />}
      {!loading && <Grid country='it' size='9' filters />}
    </div>
  );
};

export default NewsPage;
