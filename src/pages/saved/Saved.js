import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Articles/Card';

const Saved = () => {
  const { readLater } = useSelector(state => state.news);

  return (
    <div className='page-padding'>
      <h1>Salvati</h1>
      <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
        {readLater.map(article => (
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
