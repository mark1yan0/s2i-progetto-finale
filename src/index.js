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
// redux persist
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage'; // defaults to localstorage

const persistConfig = {
  key: 'uptodate',
  storage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//create store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <ScrollToTop />
          <App />
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
