import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useNews from '../../hooks/useNews';
import { useSelector } from 'react-redux';
//components
import FiltersContainer from '../Filters/FiltersContainer';
import Card from './Card';

const Grid = ({ size, category, filters, covidpage }) => {
  const history = useHistory();
  const { hasErrors, searchNews, covid, noResults } = useSelector(
    state => state.news
  );
  const { allNews, newsCategories } = useNews(size);

  const [articles, setArticles] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    if (covidpage) {
      setArticles(covid);
    } else {
      if (searchNews.length > 0) {
        setArticles(searchNews);
      } else {
        setArticles(allNews);
      }
    }
    // eslint-disable-next-line
  }, [allNews, searchNews]);

  //condiitonal logic
  const newsContent = category ? (
    Object.keys(newsCategories).map(category => (
      <section className='py-3' key={category}>
        <div className='flex items-end'>
          <h1 className='text-2xl uppercase'>{category}</h1>
          <p
            onClick={() => history.push('/news')}
            className='cursor-pointer hover:text-primary-dark'
          >
            &nbsp; &nbsp;Vedi tutti
          </p>
        </div>
        <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
          {newsCategories[category].slice(0, size).map(article => (
            <Card
              key={article?.id}
              image={article?.image}
              link={article?.link}
              title={article?.title}
              description={article?.description}
              author={article?.author}
              date={article?.date}
              source={article?.source}
              id={article?.id}
              category={article?.category}
              readLater={article?.readLater}
            />
          ))}
        </div>
      </section>
    ))
  ) : (
    <section className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
      {articles?.map(article => (
        <Card
          key={article?.id}
          image={article?.image}
          link={article?.link}
          title={article?.title}
          description={article?.description}
          author={article?.author}
          date={article?.date}
          source={article?.source}
          id={article?.id}
          category={article?.category}
          readLater={article?.readLater}
        />
      ))}
    </section>
  );

  return (
    <>
      {filters && (
        <FiltersContainer
          selectedFilter={selectedFilter}
          items={allNews} // direct redux state
          setItems={setArticles}
          setSelectedFilter={setSelectedFilter}
        />
      )}
      {!hasErrors && newsContent}
      {hasErrors && !noResults && (
        <h1>C'è stato un errore nel caricamento delle notizie</h1>
      )}
      {hasErrors && noResults && <h1>Nessun risultato trovato</h1>}
    </>
  );
};

export default Grid;
