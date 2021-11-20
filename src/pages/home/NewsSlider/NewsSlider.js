import React from 'react';
import './Slider.css';
//redux call import
import { useSelector } from 'react-redux';
import { newsSelector } from '../../../services/newsSlice';
//components
import Slider from '@farbenmeer/react-spring-slider';
import Bullets from './Bullets';

const NewsSlider = () => {
  const { allNews, loading, hasErrors } = useSelector(newsSelector);

  function truncate(str, n, append) {
    return str?.length > n ? str.substr(0, n - 1) + append : str;
  }

  return (
    <div
      id='home-slider'
      className='relative w-full -mt-4'
      style={{ height: '600px' }}
    >
      <Slider auto='10000' hasArrows hasBullets BulletComponent={Bullets}>
        {allNews?.map(article => (
          <div
            className='h-full w-full'
            style={{
              background: `url(${article?.image}) no-repeat center`,
              backgroundSize: '100% 100%',
            }}
          >
            <div
              className='absolute bottom-0 left-0 w-full p-10 text-text-light flex items-end'
              style={{
                background:
                  'linear-gradient(0deg, rgba(0,0,0,0.6) 79%, rgba(0,0,0,0.8631827731092436) 100%)',
              }}
            >
              <div>
                <a href={article?.link} target='_'>
                  <h1 className='text-3xl'>
                    <strong>{article?.title} </strong>
                  </h1>
                </a>
                <p title={article?.description}>
                  {truncate(article?.description, 200, '...')}
                </p>{' '}
                <br />
                <p className='text-xs text-gray-400'>
                  {truncate(article?.date, 11, '')}
                </p>
                <p className='text-xs text-gray-400'>{article?.author}</p>
              </div>
              <a
                className='z-10 text-gray-400'
                href={`https://${article?.source}`}
                target='_'
              >
                {article?.source.toLowerCase()}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
