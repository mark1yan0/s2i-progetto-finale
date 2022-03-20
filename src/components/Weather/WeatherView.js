import React from 'react';
import Skeleton from '../Skeleton';
import SnackBar from '../SnackBar';

const WeatherView = ({ modal, hasErrors, loading, weather }) => {
  const weatherLength = weather?.length;
  const location = weather?.location?.name;
  const region = weather?.location?.region;
  const country = weather?.location?.country;
  const localtime = weather?.location?.localtime;
  const temp = weather?.current?.temp_c;
  const condition = weather?.current?.condition?.text;
  const icon = weather?.current?.condition?.icon;

  return (
    <div
      className={`${
        modal ? 'text-text-dark' : 'text-text-light'
      } md:block px-6 pb-1`}
    >
      {hasErrors ? (
        <SnackBar type='error' message='Could not load weather info' />
      ) : (
        <>
          {loading ? (
            <Skeleton type='text' />
          ) : (
            <p>
              <strong>{weatherLength === 0 ? '' : location}</strong>
            </p>
          )}
          {loading ? (
            <Skeleton type='text' />
          ) : (
            <div className='flex justify-between items-center'>
              <p>
                <strong>
                  {weatherLength === 0
                    ? ''
                    : `${region}${region && ', '}${country}`}
                </strong>
              </p>
            </div>
          )}

          {loading ? (
            <Skeleton type='text' />
          ) : (
            <p>{weatherLength === 0 ? '' : localtime}</p>
          )}
          <div className='flex items-center'>
            <div>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                <p className='text-6xl'>
                  <strong>{weatherLength === 0 ? '' : temp + '°'}</strong>
                </p>
              )}
              {loading ? (
                <Skeleton type='text' />
              ) : (
                <p className='text-3xl'>
                  <strong>{weatherLength === 0 ? '' : condition}</strong>
                </p>
              )}
            </div>
            {loading ? (
              <Skeleton type='text' />
            ) : (
              <img className='w-24' src={icon} alt={condition} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherView;
