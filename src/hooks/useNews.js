import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newsSelector, fetchNews, setCategories } from '../services/newsSlice';

const useNews = (country, size) => {
  const dispatch = useDispatch();
  //state
  const { allNews, newsCategories, loading, hasErrors } =
    useSelector(newsSelector);

  //dispatch thunk when component first mounts
  useEffect(async () => {
    if (allNews.length !== 0) return;
    await dispatch(fetchNews(country, 'business')); //country in 'it' form
    await dispatch(fetchNews(country, 'science'));
    await dispatch(fetchNews(country, 'technology'));
    await dispatch(fetchNews(country, 'sports'));
    await dispatch(fetchNews(country, 'health'));
    await dispatch(fetchNews(country, 'entertainment'));
    //filter categories once done fetching
    await dispatch(setCategories(allNews));
  }, [country]);

  return {
    allNews,
    newsCategories,
    loading,
    hasErrors,
  };
};

export default useNews;
