import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  weather: [],
  defaultWeather: {
    isGeolocation: false,
    location: localStorage.getItem('defaultWeather')
      ? JSON.parse(localStorage.getItem('defaultWeather'))
      : 'Milan',
  },
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

    setDefaultWeather: (state, { payload }) => {
      if (payload) {
        state.defaultWeather = payload;
        localStorage.setItem(
          'defaultWeather',
          JSON.stringify(payload.location)
        );
      }
    },
    getWeatherFailure: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
      console.log(action.payload);
    },
  },
});

export const {
  getWeather,
  getWeatherFailure,
  getWeatherSuccess,
  setDefaultWeather,
} = weatherSlice.actions;
export default weatherSlice.reducer;
export const weatherSelector = state => state.weather;
