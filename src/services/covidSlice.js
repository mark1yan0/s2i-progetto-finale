import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  full: false,
  covidStats: {},
};

const covidSlice = createSlice({
  name: 'covidStats',
  initialState,
  reducers: {
    getCovidStats: state => {
      state.loading = true;
      // state.full = false;
    },
    getCovidStatsSuccess: (state, action) => {
      state.covidStats = action.payload;
      state.loading = false;
      state.hasErrors = false;
      state.full = true;
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

export function fetchCovidStats(search) {
  if (search) {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      params: { country: search },
      headers: {
        'x-rapidapi-host': process.env.REACT_APP_COVID_HOST,
        'x-rapidapi-key': process.env.REACT_APP_COVID_KEY,
      },
    };

    return async (dispatch, getState) => {
      const user = getState().authentication?.user;
      if (user !== null) {
        dispatch(getCovidStats());

        try {
          const res = await axios.request(options);
          if (res?.data?.response?.length !== 0) {
            dispatch(getCovidStatsSuccess(res?.data?.response[0]));
            return;
          }
        } catch (error) {
          dispatch(getCovidStatsFailure(error));
        }
      }
    };
  }
}
