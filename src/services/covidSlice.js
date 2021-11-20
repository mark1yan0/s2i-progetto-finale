import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  covidStats: [],
};

const covidSlice = createSlice({
  name: 'covidStats',
  initialState,
  reducers: {
    getCovidStats: state => {
      state.loading = true;
    },
    getCovidStatsSuccess: (state, { payload }) => {
      state.covidStats = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getCovidStatsFailure: (state, error) => {
      state.loading = false;
      state.hasErrors = true;
      console.log(error);
    },
  },
});

export const { getCovidStats, getCovidStatsSuccess, getCovidStatsFailure } =
  covidSlice.actions;
export default covidSlice.reducer;
export const covidSelector = state => state.covidStats;

export function fetchCovidStats(country) {
  const options = {
    method: 'GET',
    url: 'https://covid-193.p.rapidapi.com/statistics',
    params: { country: country },
    headers: {
      'x-rapidapi-host': process.env.REACT_APP_COVID_HOST,
      'x-rapidapi-key': process.env.REACT_APP_COVID_KEY,
    },
  };

  return async dispatch => {
    dispatch(getCovidStats());

    try {
      const res = await axios.request(options);

      dispatch(getCovidStatsSuccess(res?.data?.response));
    } catch (error) {
      dispatch(getCovidStatsFailure(error));
    }
  };
}
