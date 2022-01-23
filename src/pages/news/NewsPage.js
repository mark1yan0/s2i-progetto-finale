import React from 'react';
import Grid from '../../components/Articles/Grid';

const NewsPage = () => {
  return (
    <div className='w-full page-padding'>
      <h1>NewsPage</h1>
      <Grid country='it' size='9' filters />
    </div>
  );
};

export default NewsPage;
