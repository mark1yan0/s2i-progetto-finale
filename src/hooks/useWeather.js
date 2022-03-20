import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getWeather, getWeatherFailure } from '../services/weatherSlice';

const useWeather = query => {
  const dispatch = useDispatch();
  const [data, setData] = useState(undefined);
  async function fetchWeather() {
    dispatch(getWeather());
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: query },
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_WEATHER_HOST,
        'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY,
      },
    };

    try {
      const res = await axios.request(options);
      if (res.status === 200 || res.status === 201) {
        setData(res?.data);
      }
    } catch (err) {
      dispatch(getWeatherFailure(err));
    }
  }

  useEffect(() => {
    fetchWeather(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return data;
};

export default useWeather;
