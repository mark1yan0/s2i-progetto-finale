/*Here is were you will import all of 
your various reducers for the Redux state and 
combine them with combineReducers() */

import { combineReducers } from 'redux';
import newsReducer from './newsSlice';
import covidReducer from './covidSlice';
import weatherReducer from './WeatherSlice';

//combine reducers to inject in to the store
const rootReducer = combineReducers({
  news: newsReducer,
  covidStats: covidReducer,
  weather: weatherReducer,
});

export default rootReducer;
