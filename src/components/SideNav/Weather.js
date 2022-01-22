import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { weatherSelector, fetchWeather } from '../../services/weatherSlice';
import SnackBar from '../SnackBar';
import Skeleton from '../Skeleton';

const Weather = () => {
  //weather data
  const dispatch = useDispatch();
  const { weather, loading, hasErrors } = useSelector(weatherSelector);

  useEffect(() => {
    if (weather.length !== 0) return;
    dispatch(fetchWeather('voghera'));
  }, []);

  return (
    <div className='text-text-light px-6 pb-10'>
      {hasErrors ? (
        <SnackBar type='error' message='Could not load weather info' />
      ) : (
        <>
          {loading ? (
            <Skeleton type='text' />
          ) : (
            <p>
              <strong>
                {weather.length === 0 ? '' : weather?.location?.name}
              </strong>
            </p>
          )}
          {loading ? (
            <Skeleton type='text' />
          ) : (
            <p>
              <strong>
                {weather.length === 0
                  ? ''
                  : weather?.location?.region +
                    ',' +
                    weather?.location?.country}
              </strong>
            </p>
          )}

          {loading ? (
            <Skeleton type='text' />
          ) : (
            <p>{weather.length === 0 ? '' : weather?.location?.localtime}</p>
          )}
          <div className='flex items-center'>
            <div>
              {loading ? (
                <Skeleton type='text' />
              ) : (
                <p className='text-6xl'>
                  <strong>
                    {weather.length === 0 ? '' : weather?.current?.temp_c + '°'}
                  </strong>
                </p>
              )}
              {loading ? (
                <Skeleton type='text' />
              ) : (
                <p className='text-3xl'>
                  <strong>
                    {weather.length === 0
                      ? ''
                      : weather?.current?.condition?.text}
                  </strong>
                </p>
              )}
            </div>
            {loading ? (
              <Skeleton type='text' />
            ) : (
              <img
                className='flex-auto'
                src={weather?.current?.condition?.icon}
                alt={weather?.current?.condition?.text}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
