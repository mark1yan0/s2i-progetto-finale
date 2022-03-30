import React from 'react';

import CovidSearch from './CovidSearch';
import WeatherSearch from './WeatherSearch';
import NewsSearch from './NewsSearch';

const Search = props => {
  switch (props.type) {
    case 'covid':
      return <CovidSearch />;

    case 'weather':
      return <WeatherSearch {...props} />;

    case 'news':
      return <NewsSearch {...props} />;

    default:
      break;
  }
};

export default Search;
