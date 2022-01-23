import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FiltersContainer from '../../components/Filters/FiltersContainer';
import Card from '../../components/Articles/Card';

const Saved = () => {
  const { readLater } = useSelector(state => state.news);
  const [articles, setArticles] = useState(readLater);
  const [selectedFilter, setSelectedFilter] = useState('');

  return (
    <div className='page-padding'>
      <h1>Salvati</h1>
      <FiltersContainer
        selectedFilter={selectedFilter}
        items={readLater} // direct redux state
        setItems={setArticles}
        setSelectedFilter={setSelectedFilter}
      />
      <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
        {articles.map(article => (
          <Card
            image={article?.image}
            link={article?.link}
            title={article?.title}
            description={article?.description}
            author={article?.author}
            date={article?.date}
            source={article?.source}
            key={article?.id}
            id={article?.id}
            category={article?.category}
            readLater={article?.readLater}
          />
        ))}
      </div>
    </div>
  );
};

export default Saved;
