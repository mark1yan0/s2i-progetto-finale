import React, { useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import {
  newsSelector,
  fetchNews,
  setCategories,
} from '../../services/newsSlice';
//components
import Card from './Card';

const Grid = ({ country, size, category }) => {
  //update
  const dispatch = useDispatch();
  //state
  const { allNews, newsCategories, loading, hasErrors } =
    useSelector(newsSelector);

  //dispatch thunk when component first mounts
  useEffect(async () => {
    if (allNews.length !== 0) return;
    await dispatch(fetchNews(country, 'business', size)); //country in 'it' form
    await dispatch(fetchNews(country, 'science', size));
    await dispatch(fetchNews(country, 'technology', size));
    await dispatch(fetchNews(country, 'sports', size));
    await dispatch(fetchNews(country, 'health', size));
    await dispatch(fetchNews(country, 'entertainment', size));
    // console.log(newsCategory);
    await dispatch(setCategories(allNews));
  }, []);

  //state search
  //top news state
  // const [topNews, setTopNews] = useState([]);
  // //search news state
  // const [searchNews, setSearchNews] = useState([]);
  // //search handlers state
  // const [searchVisibility, setSearchVisibility] = useState(false);
  // const [search, setSearch] = useState('');
  // const [query, setQuery] = useState('');

  // //search news
  // async function getSearchNews() {
  //   const api_key = 'f7f501f1f0624eb4a64d393536b74aa0';

  //   const everything_options = {
  //     method: 'GET',
  //     url: `https://newsapi.org/v2/everything?q=${query}&language=it&apiKey=${api_key}`, //.env, creare endpoints
  //   }; //non si può fare country

  //   try {
  //     let searchNewsData = await axios.request(everything_options);
  //     setSearchNews(searchNewsData.data.articles);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  //   //get search news
  //   useEffect(() => {
  //     getSearchNews();
  //   }, [query]);

  //   //search handlers
  //   function updateSearch(e) {
  //     setSearch(e.target.value);
  //   }

  //   function getSearch(e) {
  //     e.preventDefault();
  //     setQuery(search);
  //     setSearch('');
  //   }

  // categories.map(category => console.log(category));

  return (
    <>
      {loading ? (
        <p>Loading news...</p>
      ) : hasErrors ? (
        <p>Cannot display news...</p>
      ) : (
        <>
          {/* <form onSubmit={getSearch}>
                    <input
                      className='border'
                      type='text'
                      value={search}
                      onChange={updateSearch}
                      onFocus={() => setSearchVisibility(true)}
                      onBlur={() => setSearchVisibility(false)}
                    />
                  </form> */}
          {category ? (
            Object.keys(newsCategories).map(category => (
              <section className='py-3' key={category}>
                <h1>{category}</h1>
                <div className='grid grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
                  {newsCategories[category].map(article => (
                    <Card
                      image={article?.image}
                      link={article?.link}
                      title={article?.title}
                      description={article?.description}
                      author={article?.author}
                      date={article?.date}
                      source={article?.source}
                      key={article?.id}
                      category={article?.category}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <section className='grid grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
              {allNews.map(article => (
                <Card
                  image={article?.image}
                  link={article?.link}
                  title={article?.title}
                  description={article?.description}
                  author={article?.author}
                  date={article?.date}
                  source={article?.source}
                  key={article?.id}
                  category={article?.category}
                />
              ))}
            </section>
          )}

          {/* <h1>{category}</h1> */}
          {/* {news?.map(article => (
              <div key={key}>{newsCategories[key]}</div>
              
            ))} */}
        </>
      )}
    </>
  );
};

export default Grid;
