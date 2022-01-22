import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//react router
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utilities/ScrollToTop';
//redux
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './services';

//create store
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

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
