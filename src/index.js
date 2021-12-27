import React from 'react';
import ReactDOM from 'react-dom';
import './styles/output.css';
import App from './App';
//react router
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utilities/ScrollToTop';
//redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './services';

//create store
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop />
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);