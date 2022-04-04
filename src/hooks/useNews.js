import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  newsSelector,
  getNews,
  getNewsSuccess,
  getNewsFailure,
} from '../services/newsSlice';
import uuid from 'react-uuid';
import useSliderNews from './useSliderNews';
import axios from 'axios';
import { userSelector } from '../services/authSlice';

const useNews = size => {
  //state
  const { user } = useSelector(userSelector);
  const { allNews, hasErrors, newsCategories, loading, readLater } =
    useSelector(newsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allNews.length !== 0 || hasErrors) return;
    function fetchNews() {
      if (!loading && user !== null) {
        dispatch(getNews());
        const categories = [
          'business',
          'technology',
          'entertainment',
          'health',
          'science',
          'sports',
        ];
        categories.forEach(async category => {
          try {
            const options = {
              method: 'GET',
              url: `https://current-news.p.rapidapi.com/news/${category}`,
              headers: {
                'X-RapidAPI-Host': process.env.REACT_APP_NEWS_HOST,
                'X-RapidAPI-Key': process.env.REACT_APP_NEWS_KEY,
              },
            };
            const request = await axios.request(options);
            if (request.status === 200 || request.status === 201) {
              const payload = request?.data?.news?.map(article => ({
                title: article?.title,
                description: article?.description,
                date: article?.publishedAt,
                author: article?.author,
                image: article?.urlToImage,
                link: article?.url,
                category: category,
                id: uuid(),
                readLater: false,
              }));
              let array = [];
              for (let i = 0; i < size; i++) {
                array.push(payload[i]);
              }
              dispatch(getNewsSuccess(array));
            }
          } catch (error) {
            dispatch(getNewsFailure(error));
          }
        });
      }
    }

    fetchNews();
  }, [allNews, hasErrors, dispatch]);

  useSliderNews();

  return {
    allNews,
    newsCategories,
  };
};

export default useNews;
