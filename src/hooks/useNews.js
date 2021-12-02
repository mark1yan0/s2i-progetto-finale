import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newsSelector, fetchNews, setCategories } from '../services/newsSlice';

const useNews = (country, size) => {
  const dispatch = useDispatch();
  //state
  const { allNews, newsCategories, loading, hasErrors } =
    useSelector(newsSelector);

  //dispatch thunk when component first mounts
  useEffect(() => {
    if (allNews.length !== 0) return;
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
  }, [country]);

  return {
    allNews,
    newsCategories,
    loading,
    hasErrors,
  };
};

export default useNews;
