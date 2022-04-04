import { useEffect } from 'react';
import { useDebounce } from 'use-debounce/lib';
import {
  getNews,
  getSearchNewsSuccess,
  getSearchNewsFailure,
  getCovidNewsSuccess,
} from '../services/newsSlice';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const useSearchNews = search => {
  const dispatch = useDispatch();
  // searchbar state
  const [term] = useDebounce(search, 300);
  useEffect(() => {
    async function fetchNews(query) {
      const options = {
        method: 'GET',
        url: 'https://free-news.p.rapidapi.com/v1/search',
        params: { q: query, lang: 'it' },
        headers: {
          'X-RapidAPI-Host': process.env.REACT_APP_SEARCH_NEWS_HOST,
          'X-RapidAPI-Key': process.env.REACT_APP_SEARCH_NEWS_KEY,
        },
      };
      dispatch(getNews());
      try {
        const response = await axios.request(options);
        if (response?.status === 200) {
          const news = response?.data?.articles.map(article => ({
            title: article?.title,
            description: article?.summary,
            date: article?.published_date,
            author: article?.author,
            image: article?.media,
            link: article?.link,
            id: article?._id,
            readLater: false,
          }));
          dispatch(getSearchNewsSuccess(news));
          if (search === 'covid') {
            dispatch(getCovidNewsSuccess(news));
          }
        }
      } catch (error) {
        dispatch(getSearchNewsFailure());
      }
    }

    if (term) {
      fetchNews(term);
    } else {
      dispatch(getSearchNewsSuccess([]));
    }
    // eslint-disable-next-line
  }, [dispatch, term]);
};

export default useSearchNews;
