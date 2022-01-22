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
  readLater: localStorage.getItem('readlater')
    ? JSON.parse(localStorage.getItem('readlater'))
    : [],
  categories: false,
  sliderNews: [],
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
      state.hasErrors = false;
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

      state.categories = true;
      state.loading = false;
    },

    toggleReadLater: (state, action) => {
      const readLaterList = state.readLater;
      const allNewsList = state.allNews;
      const addedArticle = action.payload;
      const articleIndex = state.allNews.findIndex(
        article => article.id === addedArticle.id
      );

      const isReadLater = addedArticle?.readLater;
      if (isReadLater) {
        // already in readlater
        // if i add some article and then days later return to remove it, it wouldn't
        // find the same article
        const existisInAllNews = allNewsList.includes(addedArticle);
        if (existisInAllNews) {
          allNewsList.splice(articleIndex, 1, {
            ...addedArticle,
            readLater: false,
          });
        } else {
          allNewsList.push({
            ...addedArticle,
            readLater: false,
          });
        }
        const updatedReadLater = readLaterList.filter(
          article => article.id !== addedArticle.id
        );

        localStorage.setItem('readlater', JSON.stringify(updatedReadLater));
        state.allNews = allNewsList;
        state.readLater = updatedReadLater;
      } else {
        // not in readlater
        allNewsList.splice(articleIndex, 1, {
          ...addedArticle,
          readLater: true,
        });
        readLaterList.push({
          ...addedArticle,
          readLater: true,
        });

        localStorage.setItem('readlater', JSON.stringify(readLaterList));
        state.allNews = allNewsList;
        state.readLater = readLaterList;
      }
    },

    setSliderNews: (state, action) => {
      state.sliderNews = action.payload;
    },
  },
});

//actions to alter the state values
export const {
  getNews,
  getNewsSuccess,
  getNewsFailure,
  setCategories,
  toggleReadLater,
  setSliderNews,
} = newsSlice.actions;

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
  return async (dispatch, getState) => {
    const loading = getState().news.loading;
    const user = getState().authentication?.user;
    if (!loading && user) dispatch(getNews());
    if (user !== null) {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
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
              readLater: false,
            }))
          )
        );
      } catch (error) {
        //on failure update the store accordingly
        dispatch(getNewsFailure(error));
      }
    }
  };
}
