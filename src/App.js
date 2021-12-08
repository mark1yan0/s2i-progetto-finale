import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
//components
import TopNav from './components/TopNav';
import SideNav from './components/SideNav/SideNav';
import Footer from './components/Footer';
//pages
import Home from './pages/home/Home';
import NewsPage from './pages/news/NewsPage';
import CovidPage from './pages/covid/CovidPage';
import AuthPage from './pages/auth/AuthPage';
import Saved from './pages/saved/Saved';

const App = () => {
  const layoutStyle = 'flex flex-col items-center w-full';

  return (
    <div className='App'>
      <TopNav />
      <div>
        <SideNav />
        <main className='pt-20 pb-6 ml-10 sm:ml-72'>
          <Switch>
            <Route exact path='/'>
              <section id='home' className={layoutStyle}>
                <Home />
              </section>
            </Route>
            <Route path='/news'>
              <section id='news' className={layoutStyle}>
                <NewsPage />
              </section>
            </Route>
            <Route path='/covid'>
              <section id='covid' className={layoutStyle}>
                <CovidPage />
              </section>
            </Route>
            <Route path='/auth'>
              <section id='auth' className={layoutStyle}>
                <AuthPage />
              </section>
            </Route>
            <Route path='/saved'>
              <section id='saved' className={layoutStyle}>
                <Saved />
              </section>
            </Route>
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default App;
