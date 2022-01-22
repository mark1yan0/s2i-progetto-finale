import React from 'react';
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

  //truncate text to make it shorter
  function truncate(str, n, append) {
    return str?.length > n ? str.substr(0, n - 1) + append : str;
  }

  function toggleReadLaterHandler() {
    const targetArticle = allNews?.find(article => article.id === id);
    dispatch(toggleReadLater(targetArticle));
  }
  const isReadLater = readLater?.find(article => article.id === id)?.readLater;
  // const isReadLater = true;

  return (
    <div className='mb-3 sm:mb-0 bg-secondary-light relative text-text-dark rounded shadow-md transition sm:transform hover:scale-105'>
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
        className={`absolute bottom-5 right-5 cursor-pointer rounded-full text-text-dark hover:text-text-light hover:bg-primary-dark ${
          isReadLater && 'bg-primary-dark'
        }`}
        onClick={toggleReadLaterHandler}
      >
        {isReadLater ? (
          <AiOutlineMinus className='text-3xl text-text-light' />
        ) : (
          <AiOutlinePlus className='text-3xl' />
        )}
      </div>
    </div>
  );
};

export default Card;
