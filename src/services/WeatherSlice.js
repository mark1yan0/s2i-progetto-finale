import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  weather: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeather: state => {
      state.loading = true;
    },
    getWeatherSuccess: (state, { payload }) => {
      state.weather = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getWeatherFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getWeather, getWeatherFailure, getWeatherSuccess } =
  weatherSlice.actions;
export default weatherSlice.reducer;
export const weatherSelector = state => state.weather;

export function fetchWeather(query) {
  const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: { q: query },
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_WEATHER_HOST,
      'x-rapidapi-key': process.env.REACT_APP_WEATHER_KEY,
    },
  };

  return async dispatch => {
    dispatch(getWeather());
    try {
      const res = await axios.request(options);
      dispatch(getWeatherSuccess(res?.data));
    } catch (error) {
      dispatch(getWeatherFailure(error));
    }
  };
}
