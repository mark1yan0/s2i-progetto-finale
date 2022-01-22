import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from './services/authSlice';
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
    <div className='relative'>
      <TopNav />
      <div>
        <SideNav />
        <main className='pt-20 pb-6 ml-10 sm:ml-72'>
          <Switch>
            <Route path='/auth'>
              <section id='auth' className={layoutStyle}>
                <AuthPage />
              </section>
            </Route>
            <PrivateRoute exact path='/'>
              <section id='home' className={layoutStyle}>
                <Home />
              </section>
            </PrivateRoute>
            <PrivateRoute path='/news'>
              <section id='news' className={layoutStyle}>
                <NewsPage />
              </section>
            </PrivateRoute>
            <PrivateRoute path='/covid'>
              <section id='covid' className={layoutStyle}>
                <CovidPage />
              </section>
            </PrivateRoute>
            <PrivateRoute path='/saved'>
              <section id='saved' className={layoutStyle}>
                <Saved />
              </section>
            </PrivateRoute>
          </Switch>
        </main>
      </div>
      <Footer />
    </div>
  );
};

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { user } = useSelector(userSelector);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
