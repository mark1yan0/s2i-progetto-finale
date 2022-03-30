import React from 'react';
import useLoading from '../../hooks/useLoading';
import { newsSelector } from '../../services/newsSlice';
//components
import CovidTable from '../../components/CovidTable/CovidTable';
import Grid from '../../components/Articles/Grid';
import SnackBar from '../../components/SnackBar';
import Skeleton from '../../components/Skeleton';

const CovidPage = () => {
  const [loading, hasErrors, snackbar] = useLoading(newsSelector);
  return (
    <div className='page-wrapper'>
      <CovidTable expanded />
      {loading && <Skeleton type='box' height='100vh' />}
      {snackbar && (
        <SnackBar
          type='error'
          message="C'è stato un problema nel caricare le notizie"
        />
      )}
      {!loading && !hasErrors && <Grid country='it' size='6' covidpage />}
    </div>
  );
};

export default CovidPage;
