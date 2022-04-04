import React from 'react';
import { toggleReadLater } from '../../services/newsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import placeholder from '../../assets/placeholder-image.png';

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
  const { allNews, searchNews } = useSelector(state => state.news);
  const readLater = useSelector(state => state.news.readLater);

  //truncate text to make it shorter
  function truncate(str, n, append) {
    return str?.length > n ? str.substr(0, n - 1) + append : str;
  }

  function toggleReadLaterHandler() {
    let targetArticle = allNews?.find(article => article?.id === id);
    if (!targetArticle) {
      const localStorageArticle = JSON.parse(
        localStorage.getItem('readlater')
      ).find(article => article?.id === id);
      if (!localStorageArticle) {
        targetArticle = searchNews.find(article => article?.id === id);
      } else {
        targetArticle = localStorageArticle;
      }
    }
    dispatch(toggleReadLater(targetArticle));
  }
  const isReadLater = readLater?.find(article => article.id === id)?.readLater;

  return (
    <div className='mb-3 sm:mb-0 bg-secondary-light relative text-text-dark rounded shadow-md transition sm:transform hover:scale-105'>
      <a href={link} target='_blank' rel='noreferrer noopener'>
        <img
          src={image ? image : placeholder}
          alt='immagine'
          className='object-cover rounded-t w-full h-60'
        />
      </a>
      <div className='rounded-b p-4 h-70 relative hover:text-primary-dark'>
        <strong title={title} className='overflow-hidden'>
          <a
            href={link}
            target='_blank'
            className='text-xl'
            rel='noreferrer noopener'
          >
            {truncate(title, 60, '...')}
          </a>
        </strong>
        <p title={description} className='text-sm overflow-hidden'>
          {truncate(description, 100, '...')}
        </p>
        <br />
        <p className='text-xs'>{author}</p>
        <p>{truncate(date, 11, '')}</p>
      </div>
      <div
        className={`absolute bottom-5 right-5 cursor-pointer rounded-full text-text-dark hover:text-text-light hover:bg-primary-dark ${
          isReadLater && 'bg-primary-dark'
        }`}
        onClick={toggleReadLaterHandler}
      >
        {isReadLater ? (
          <AiOutlineMinus
            title='Rimuovi dalla libreria'
            className='text-3xl text-text-light'
          />
        ) : (
          <AiOutlinePlus title='Aggiungi alla libreria' className='text-3xl' />
        )}
      </div>
    </div>
  );
};

export default Card;
