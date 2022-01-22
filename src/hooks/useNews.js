import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newsSelector, fetchNews, setCategories } from '../services/newsSlice';
import useSliderNews from './useSliderNews';

const useNews = (country, size) => {
  //state
  const { allNews, hasErrors, newsCategories } = useSelector(newsSelector);
  const dispatch = useDispatch();

  //dispatch thunk when component first mounts
  useEffect(() => {
    if (allNews.length !== 0 || hasErrors) return;
    async function getNews() {
      await dispatch(fetchNews(country, 'business', size)); //country in 'it' form
      await dispatch(fetchNews(country, 'science', size));
      await dispatch(fetchNews(country, 'technology', size));
      await dispatch(fetchNews(country, 'sports', size));
      await dispatch(fetchNews(country, 'health', size));
      await dispatch(fetchNews(country, 'entertainment', size));
      //filter categories once done fetching
      await dispatch(setCategories(allNews));
    }

    getNews();
  }, []);

  useSliderNews();

  return {
    allNews,
    newsCategories,
  };
};

export default useNews;
