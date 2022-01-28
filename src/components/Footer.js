import React from 'react';

const Footer = () => {
  return (
    <footer
      className='w-full bg-primary-dark flex flex-col items-center justify-center text-text-light pl-10 md:pl-72'
      style={{ height: '90px' }}
    >
      <h2 className='text-center'>Progetto Finale Front End - Start2Impact</h2>
      <div>
        <a
          className='hover:text-gray-300'
          href='https://github.com/mark1yan0'
          target='_blank'
          rel='noreferrer nofollow'
        >
          GitHub
        </a>{' '}
        <span> | </span>
        <a
          className='hover:text-gray-300'
          href='https://mark1yan0.github.io/portfolio-repo/'
          target='_blank'
          rel='noreferrer nofollow'
        >
          Portfolio
        </a>{' '}
        <span> | </span>
        <a
          className='hover:text-gray-300'
          href='https://www.instagram.com/markkmit/'
          target='_blank'
          rel='noreferrer nofollow'
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
