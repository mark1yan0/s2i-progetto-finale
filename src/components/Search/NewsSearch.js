import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce/lib';
import uuid from 'react-uuid';
import axios from 'axios';
import {
  getNews,
  getSearchNewsSuccess,
  getNewsFailure,
} from '../../services/newsSlice';

const NewsSearch = () => {
  const dispatch = useDispatch();

  // searchbar state
  const [search, setSearch] = useState('');
  const [term] = useDebounce(search, 300);
  useEffect(() => {
    async function fetchNews(query) {
      const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=10&sortBy=popularity&language=it&apiKey=${process.env.REACT_APP_NEWS_KEY}`;
      dispatch(getNews());
      try {
        const response = await axios.get(url);
        if (response?.status === 200) {
          const news = response?.data?.articles.map(article => ({
            title: article?.title,
            description: article?.description,
            date: article?.publishedAt,
            author: article?.author,
            image: article?.urlToImage,
            link: article?.url,
            id: uuid(),
            readLater: false,
          }));
          dispatch(getSearchNewsSuccess(news));
        }
      } catch (error) {
        dispatch(getNewsFailure());
      }
    }

    if (term) {
      fetchNews(term);
    } else {
      dispatch(getSearchNewsSuccess([]));
    }
  }, [dispatch, term]);

  function updateSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <form className='flex mt-2 sm:mt-0'>
      <div className='relative'>
        <BsSearch
          className='text-xl absolute left-2 text-primary-dark'
          style={{ bottom: 5 }}
        />
        <input
          className='rounded-full pl-8 pr-2 py-1 focus:outline text-primary-dark focus:border-primary-dark'
          placeholder='Cerca Notizie'
          type='text'
          onChange={updateSearch}
        />
      </div>
    </form>
  );
};

export default NewsSearch;
