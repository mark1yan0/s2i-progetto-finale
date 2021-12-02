import React, { useState } from 'react';
import { toggleReadLater } from '../../services/newsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const Card = ({
  image,
  link,
  title,
  description,
  author,
  date,
  source,
  id,
}) => {
  const dispatch = useDispatch();
  const allNews = useSelector(state => state.news.allNews);
  const readLater = useSelector(state => state.news.readLater);
  //state read more
  // const [readMore, setReadMore] = useState(false);
  //truncate text to make it shorter
  function truncate(str, n, append) {
    return str?.length > n ? str.substr(0, n - 1) + append : str;
  }

  function toggleReadLaterHandler() {
    const targetArticle = allNews?.filter(article => article.id === id);
    dispatch(toggleReadLater(targetArticle));
  }

  const readLaterArticle = readLater?.find(article => article.id === id);
  const isReadLater = readLaterArticle?.readLater;

  return (
    <div className='bg-secondary-light text-text-dark rounded shadow-md transition sm:transform hover:scale-105'>
      <a href={link} target='_'>
        <img
          src={image}
          alt='immagine'
          className='object-cover rounded-t w-full h-60'
        />
      </a>
      <div className=' rounded-b p-4 h-70 relative'>
        <strong title={title}>
          <a href={link} target='_' className='text-xl'>
            {truncate(title, 60, '...')}
          </a>
        </strong>
        {/* <h1 onClick={() => setReadMore(!readMore)}>Read more</h1> */}
        <p title={description} className='text-sm'>
          {truncate(description, 100, '...')}
        </p>
        <br />
        <p className='text-xs'>{author}</p>
        <p>{truncate(date, 11, '')}</p>
        <a href={`https://${source}`} target='_'>
          {source?.toLowerCase()}
        </a>
      </div>
      <div
        className={`absolute bottom-4 right-4 cursor-pointer rounded text-text-dark transition hover:text-text-light hover:bg-primary-dark ${
          isReadLater && 'text-text-light bg-primary-dark'
        }`}
        onClick={toggleReadLaterHandler}
      >
        {isReadLater ? (
          <AiOutlineMinus className='text-3xl' />
        ) : (
          <AiOutlinePlus className='text-3xl' />
        )}
      </div>
    </div>
  );
};

export default Card;
