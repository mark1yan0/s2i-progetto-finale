import React, { useState, lazy, Suspense } from 'react';
import { useHistory } from 'react-router';
import useNews from '../../hooks/useNews';
import { useSelector } from 'react-redux';
//components
import Skeleton from '../Skeleton';
import FiltersContainer from '../Filters/FiltersContainer';
const Card = lazy(() => import('./Card'));

const Grid = ({ country, size, category, filters, covidpage }) => {
  const history = useHistory();
  const { hasErrors } = useSelector(state => state.news);
  const { allNews, newsCategories } = useNews(country, 8);

  const covidCategory = newsCategories.covid;
  const [articles, setArticles] = useState(covidpage ? covidCategory : allNews);
  const [selectedFilter, setSelectedFilter] = useState('');

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
            <Suspense
              key={article?.id}
              fallback={<Skeleton type='box' height={300} />}
            >
              <Card
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
            </Suspense>
          ))}
        </div>
      </section>
    ))
  ) : (
    <section className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
      {articles.map(article => (
        <Suspense
          key={article?.id}
          fallback={<Skeleton type='box' height={300} />}
        >
          <Card
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
        </Suspense>
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
      {hasErrors && <h1>Could not load news</h1>}
    </>
  );
};

export default Grid;
