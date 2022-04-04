import React from 'react';

const Link = ({ title, link, text }) => {
  return (
    <a
      className='hover:text-gray-300'
      href={link}
      title={title}
      target='_blank'
      rel='noreferrer nofollow'
    >
      {text}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className='w-full bg-primary-dark text-text-light pl-10 py-4  md:flex md:justify-around md:items-center md:pl-72'>
      <div className='flex flex-col items-center mt-1'>
        <h2 className='text-center'>
          Progetto Finale Front End - Start2Impact
        </h2>
        <div>
          <Link
            title='GitHub'
            link='https://github.com/mark1yan0'
            text='GitHub'
          />
          <span> | </span>
          <Link
            title='Portfolio'
            link='https://mark1yan0.github.io/portfolio-repo/'
            text='Portfolio'
          />
          <span> | </span>
          <Link
            link='https://www.instagram.com/markkmit/'
            title='Instagram'
            text='Instagram'
          />
        </div>
      </div>
      <div className='text-center mt-3'>
        <h2>Credits</h2>
        <ul>
          <li className='text-xs'>
            <Link
              link='https://www.flaticon.com/free-icons/newspaper'
              title='newspaper icons'
              text='Newspaper logo icon created by Freepik - Flaticon'
            />
          </li>
        </ul>

        <ul>
          <li className='text-xs'>
            <Link
              link='https://rapidapi.com/segjsierra-tYlPlZHk_bd/api/current-news/'
              titl
              text='Current News Api'
            />
          </li>
          <li className='text-xs'>
            <Link
              link='https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/free-news/'
              title='Free News Api'
              text='Free News Api'
            />
          </li>
          <li className='text-xs'>
            <Link
              link='https://rapidapi.com/api-sports/api/covid-193/'
              title='COVID-19 Api'
              text='COVID-19 Api'
            />
          </li>
          <li className='text-xs'>
            <Link
              link='https://rapidapi.com/weatherapi/api/weatherapi-com/'
              title='WeatherApi'
              text='WeatherApi'
            />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
