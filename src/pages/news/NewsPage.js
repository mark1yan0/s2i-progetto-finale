import React, { useState } from 'react';
import Grid from '../../components/Articles/Grid';
import Filter from '../../components/Filter';

const filterData = [
  'business',
  'entertainment',
  'health',
  'sports',
  'technology',
  'science',
];

const NewsPage = () => {
  // const [filterData, setFilterData] = useState(filterData);
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className='page-padding'>
      <h1>NewsPage</h1>
      <section className='flex justify-between'>
        {filterData.map(filter => (
          <Filter
            key={filter}
            filter={filter}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
        ))}
      </section>
      <Grid country='it' size='9' filter={selectedFilter} />
    </div>
  );
};

export default NewsPage;
