import React from 'react';
import './Slider.css';
import placeholder from '../../../assets/placeholder-image.png';
import { useSelector } from 'react-redux';
import { newsSelector } from '../../../services/newsSlice';
//components
import Slider from '@farbenmeer/react-spring-slider';
import Bullets from './Bullets';

const NewsSlider = () => {
  const { sliderNews } = useSelector(newsSelector);

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
        {sliderNews?.map(article => (
          <div
            key={article?.id}
            className='h-full w-full'
            style={{
              background: `url(${
                article?.image ? article?.image : placeholder
              }) no-repeat center`,
              backgroundSize: 'cover',
            }}
          >
            <div
              className='absolute bottom-0 left-0 w-full px-3 pt-3 pb-7 md:p-10 text-text-light flex flex-col items-end'
              style={{
                background:
                  'linear-gradient(0deg, rgba(0,0,64,0.8) 10%, rgba(65,62,124,0.8015581232492998) 85%)',
              }}
            >
              <div className='w-full'>
                <a
                  href={article?.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h1 className='text-xl md:text-3xl'>
                    <strong>{article?.title} </strong>
                  </h1>
                </a>
                <p className='hidden sm:block' title={article?.description}>
                  {truncate(article?.description, 200, '...')}
                </p>
                <br />
                <p className='text-xs text-gray-400'>
                  {truncate(article?.date, 11, '')}
                </p>
              </div>
              <div className='w-full flex justify-between items-center'>
                <p className='text-xs text-gray-400'>{article?.author}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsSlider;
