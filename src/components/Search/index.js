import React from 'react';

import CovidSearch from './CovidSearch';
import WeatherSearch from './WeatherSearch';

const Search = props => {
  switch (props.type) {
    case 'covid':
      return <CovidSearch />;

    case 'weather':
      return <WeatherSearch {...props} />;

    default:
      break;
  }
};

export default Search;
