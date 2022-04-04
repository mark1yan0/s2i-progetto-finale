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
  covid: [],
  readLater: localStorage.getItem('readlater')
    ? JSON.parse(localStorage.getItem('readlater'))
    : [],
  categories: false,
  sliderNews: [],
  searchNews: [],
  noResults: false,
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
    }, //action -> {payload, type}

    getNewsFailure: (state, action) => {
      state.loading = false;
      state.hasErrors = true;
      console.log(action.payload);
    },

    getSearchNewsSuccess: (state, action) => {
      state.loading = false;
      state.hasErrors = false;
      state.noResults = false;
      state.searchNews = action.payload;
    },

    getSearchNewsFailure: state => {
      state.loading = false;
      state.hasErrors = true;
      state.noResults = true;
    },

    getCovidNewsSuccess: (state, action) => {
      state.loading = false;
      state.hasErrors = false;
      state.noResults = false;
      state.covid = action.payload;
    },

    toggleReadLater: (state, action) => {
      const readLaterList = state.readLater;
      const allNewsList = state.allNews;
      const addedArticle = action.payload;
      const existisInAllNews = allNewsList.some(
        article => article?.title === addedArticle?.title
      );

      const isReadLater = addedArticle?.readLater;
      if (isReadLater) {
        // remove from readlater
        if (existisInAllNews) {
          const articleIndex = allNewsList.findIndex(
            article => article?.title === addedArticle?.title
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
          article => article?.id !== addedArticle?.id
        );
        state.allNews = allNewsList;
        state.readLater = updatedReadLater;
        localStorage.setItem('readlater', JSON.stringify(updatedReadLater));
      } else {
        // add to readlater
        const articleIndex = allNewsList.findIndex(
          article => article?.id === addedArticle?.id
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
  toggleReadLater,
  getSearchNewsFailure,
  getCovidNewsSuccess,
  setSliderNews,
  getSearchNewsSuccess,
} = newsSlice.actions;

//the reducers
export default newsSlice.reducer;

//the selector
// In order to pull data from our Redux store into
// a functional component, we need to write a selector
// function alongside our news slice
export const newsSelector = state => state.news;
