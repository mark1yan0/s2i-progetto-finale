import axios from 'axios';
import uuid from 'react-uuid';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  allNews: [],
  newsCategories: {
    business: [],
    science: [],
    technology: [],
    sports: [],
    health: [],
    entertainment: [],
  },
};

//A slice for news
const newsSlice = createSlice({
  name: 'news', //state name
  initialState, //state
  //define reducers
  reducers: {
    getNews: state => {
      state.loading = true;
    },

    getNewsSuccess: (state, action) => {
      state.loading = false;
      state.hasErrors = false;
      console.log(action.payload);
      state.allNews = state.allNews.concat(action.payload); //copiare tutte le news + quelle nuove
    }, //action -> {payload, type}

    getNewsFailure: (state, error) => {
      state.loading = false;
      state.hasErrors = true;
      console.log(error);
    },

    setCategories: state => {
      state.newsCategories.business = state.allNews.filter(
        article => article.category === 'business'
      );

      state.newsCategories.science = state.allNews.filter(
        article => article.category === 'science'
      );

      state.newsCategories.technology = state.allNews.filter(
        article => article.category === 'technology'
      );

      state.newsCategories.sports = state.allNews.filter(
        article => article.category === 'sports'
      );

      state.newsCategories.health = state.allNews.filter(
        article => article.category === 'health'
      );

      state.newsCategories.entertainment = state.allNews.filter(
        article => article.category === 'entertainment'
      );
    },
  },
});

//actions to alter the state values
export const { getNews, getNewsSuccess, getNewsFailure, setCategories } =
  newsSlice.actions;

//the reducers
export default newsSlice.reducer;

//the selector
// In order to pull data from our Redux store into
// a functional component, we need to write a selector
// function alongside our news slice
export const newsSelector = state => state.news;

//Asynchronous thunk action
// A thunk is a middleware that lets us call a function
// to do something, and which results in dispatching
// Redux actions to update the store
export function fetchNews(country, category, size) {
  return async dispatch => {
    dispatch(getNews());
    try {
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=${size}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
      );
      //on success pass data to the payload, and so to the store

      dispatch(
        getNewsSuccess(
          res?.data?.articles.map(article => ({
            title: article.title,
            description: article.description,
            date: article.publishedAt,
            author: article.author,
            source: article.source?.name,
            image: article.urlToImage,
            link: article.url,
            category: category,
            id: uuid(),
          }))
        )
      );
    } catch (error) {
      //on failure update the store accordingly
      dispatch(getNewsFailure(error));
    }
  };
}
