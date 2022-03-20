import React, { useEffect, useState } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  weatherSelector,
  getWeather,
  setDefaultWeather,
  getWeatherSuccess,
} from '../../services/weatherSlice';
import { useDebounce } from 'use-debounce/lib';
import Search from '../Search';
import useWeather from '../../hooks/useWeather';
import WeatherView from './WeatherView';

const Weather = () => {
  //weather data
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const { weather, loading, hasErrors, defaultWeather } =
    useSelector(weatherSelector);

  const [search, setSearch] = useState(defaultWeather.location);
  // if user gives permission for his location it sets it for the forecast
  useEffect(() => {
    setSearch(defaultWeather.location);
  }, [defaultWeather.location]);

  // searching debounce
  const [term] = useDebounce(search, 300);
  const data = useWeather(term);

  function updateSearch(e) {
    if (e.target.value === '') {
      setSearch(defaultWeather.location);
      return;
    }
    setSearch(e.target.value);
  }

  // updates weather slice
  useEffect(() => {
    dispatch(getWeather());
    if (data) {
      dispatch(getWeatherSuccess(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  function handleClose() {
    setSearch(defaultWeather.location);
    setOpenModal(false);
  }

  // saves a location as default
  function handleSave() {
    setOpenModal(false);
    dispatch(
      setDefaultWeather({
        isGeolocation: false,
        location: term,
      })
    );
  }

  return (
    <section className='flex pr-6'>
      <WeatherView weather={weather} loading={loading} hasErrors={hasErrors} />
      <Search
        type='weather'
        updateSearch={updateSearch}
        handleSave={handleSave}
        handleClose={handleClose}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </section>
  );
};

export default Weather;
