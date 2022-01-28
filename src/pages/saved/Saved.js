import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FiltersContainer from '../../components/Filters/FiltersContainer';
import Card from '../../components/Articles/Card';

const Saved = () => {
  const { readLater } = useSelector(state => state.news);
  const [articles, setArticles] = useState(readLater);
  const [selectedFilter, setSelectedFilter] = useState('');

  const emptyPage = (
    <p className='text-center'>
      {selectedFilter === ''
        ? 'Non hai articoli salvati.'
        : 'Non ci sono articoli corrispondenti al filtro selezionato'}
    </p>
  );

  return (
    <div className='page-wrapper'>
      <h1 className='text-xl'>La mia Libreria</h1>
      <FiltersContainer
        selectedFilter={selectedFilter}
        items={readLater} // direct redux state
        setItems={setArticles}
        setSelectedFilter={setSelectedFilter}
      />
      <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4'>
        {articles.length !== 0 &&
          articles.map(article => (
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
      {articles.length === 0 && emptyPage}
    </div>
  );
};

export default Saved;
