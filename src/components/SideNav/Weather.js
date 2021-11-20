import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { weatherSelector, fetchWeather } from '../../services/WeatherSlice';

const Weather = () => {
  //weather data
  const dispatch = useDispatch();
  const { weather, loading, hasErrors } = useSelector(weatherSelector);

  useEffect(() => {
    dispatch(fetchWeather('voghera'));
  }, [dispatch]);

  return (
    <div className='text-text-light px-6 pb-10'>
      {loading ? (
        <p>Loading weather</p>
      ) : hasErrors ? (
        <p>An error occured...</p>
      ) : (
        <>
          <p>
            <strong>{weather?.location?.name}</strong>
          </p>
          <p>
            <strong>
              {weather?.location?.region}, {weather?.location?.country}
            </strong>
          </p>

          <p>{weather?.location?.localtime}</p>
          <div className='flex items-center'>
            <div>
              <p className='text-6xl'>
                <strong>{weather?.current?.temp_c}</strong>°
              </p>
              <p className='text-3xl'>
                <strong>{weather?.current?.condition.text}</strong>
              </p>
            </div>
            <img
              className='flex-auto'
              src={weather?.current?.condition.icon}
              alt={weather?.current?.condition.text}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
