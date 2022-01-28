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
    covid: [],
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
      const payload = action.payload;

      state.allNews = state.allNews.concat(payload); //copiare tutte le news + quelle nuove
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

      state.newsCategories.covid = state.allNews.filter(
        article => article.category === 'covid'
      );

      state.categories = true;
      state.loading = false;
    },

    toggleReadLater: (state, action) => {
      const readLaterList = state.readLater;
      const allNewsList = state.allNews;
      const addedArticle = action.payload;

      const existisInAllNews = allNewsList.some(
        article => article.title === addedArticle.title
      );

      const isReadLater = addedArticle?.readLater;
      if (isReadLater) {
        // remove from readlater
        if (existisInAllNews) {
          const articleIndex = allNewsList.findIndex(
            article => article.title === addedArticle.title
          );
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
        state.allNews = allNewsList;
        state.readLater = updatedReadLater;
        localStorage.setItem('readlater', JSON.stringify(updatedReadLater));
      } else {
        // add to readlater
        const articleIndex = allNewsList.findIndex(
          article => article.id === addedArticle.id
        );
        allNewsList.splice(articleIndex, 1, {
          ...addedArticle,
          readLater: true,
        });
        readLaterList.push({
          ...addedArticle,
          readLater: true,
        });
        state.allNews = allNewsList;
        state.readLater = readLaterList;
        localStorage.setItem('readlater', JSON.stringify(readLaterList));
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
export function fetchNews(country, size) {
  return async (dispatch, getState) => {
    const loading = getState().news.loading;
    const readLater = getState().news.readLater;
    const user = getState().authentication?.user;
    if (!loading && user !== null) dispatch(getNews());
    if (user !== null) {
      try {
        const businessRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=business&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const business = businessRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'business',
          id: uuid(),
          readLater: false,
        }));

        const scienceRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=science&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const science = scienceRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'science',
          id: uuid(),
          readLater: false,
        }));

        const technologyRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=technology&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const technology = technologyRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'technology',
          id: uuid(),
          readLater: false,
        }));

        const sportsRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const sports = sportsRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'sports',
          id: uuid(),
          readLater: false,
        }));

        const healthRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=health&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const health = healthRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'health',
          id: uuid(),
          readLater: false,
        }));

        const entertainmentRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=entertainment&pageSize=${size}&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const entertainment = entertainmentRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'entertainment',
          id: uuid(),
          readLater: false,
        }));

        const covidRes = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&p=Coronavirus&pageSize=6&apiKey=${process.env.REACT_APP_NEWS_KEY}`
        );

        const covid = covidRes?.data?.articles.map(article => ({
          title: article.title,
          description: article.description,
          date: article.publishedAt,
          author: article.author,
          source: article.source?.name,
          image: article.urlToImage,
          link: article.url,
          category: 'covid',
          id: uuid(),
          readLater: false,
        }));

        let payload = [
          ...business,
          ...science,
          ...technology,
          ...sports,
          ...health,
          ...entertainment,
          ...covid,
        ];

        // when reloading replace localstorage items into allNews
        payload.forEach((article, index) => {
          readLater.forEach(item => {
            if (item.title === article.title) {
              payload.splice(index, 1, item);
            }
          });
        });

        dispatch(getNewsSuccess(payload));
      } catch (error) {
        //on failure update the store accordingly
        dispatch(getNewsFailure(error));
      }
    }
  };
}
