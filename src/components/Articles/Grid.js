import React from 'react';
import { useHistory } from 'react-router';
import useNews from '../../hooks/useNews';
import { useSelector } from 'react-redux';
//components
import Card from './Card';

const Grid = ({ country, size, category }) => {
  const history = useHistory();
  const { hasErrors } = useSelector(state => state.news);
  const { allNews, newsCategories } = useNews(country, 8);
  // let filteredNews;
  // switch (filter) {
  //   case 'business':
  //     filteredNews = newsCategories.business;
  //     break;

  //   case 'entertainment':
  //     filteredNews = newsCategories.entertainment;
  //     break;

  //   case 'health':
  //     filteredNews = newsCategories.health;
  //     break;

  //   case 'sports':
  //     filteredNews = newsCategories.sports;
  //     break;

  //   case 'technology':
  //     filteredNews = newsCategories.technology;
  //     break;

  //   case 'science':
  //     filteredNews = newsCategories.science;
  //     break;

  //   default:
  //     filteredNews = allNews;
  //     break;
  // }

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

  //condiitonal logic
  const newsContent = category ? (
    Object.keys(newsCategories).map(category => (
      <section className='py-3' key={category}>
        <div className='flex items-end'>
          <h1 className='text-2xl uppercase'>{category}</h1>
          <p onClick={() => history.push('/news')} className='cursor-pointer'>
            &nbsp; &nbsp;Vedi tutti
          </p>
        </div>
        <div className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
          {newsCategories[category].slice(0, size).map(article => (
            <Card
              image={article?.image}
              link={article?.link}
              title={article?.title}
              description={article?.description}
              author={article?.author}
              date={article?.date}
              source={article?.source}
              key={article?.id}
              id={article?.id}
              category={article?.category}
              readLater={article?.readLater}
            />
          ))}
        </div>
      </section>
    ))
  ) : (
    <section className='sm:grid sm:grid-cols-2 md:grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
      {allNews.slice(0, size).map(article => (
        <Card
          image={article?.image}
          link={article?.link}
          title={article?.title}
          description={article?.description}
          author={article?.author}
          date={article?.date}
          source={article?.source}
          key={article?.id}
          id={article?.id}
          category={article?.category}
          readLater={article?.readLater}
        />
      ))}
    </section>
  );

  // const filteredNewsContent = (
  //   <section className='grid grid-cols-3 gap-7 py-4 xl:max-w-screen-xl'>
  //     {filteredNews?.map(article => (
  //       <Card
  //         image={article?.image}
  //         link={article?.link}
  //         title={article?.title}
  //         description={article?.description}
  //         author={article?.author}
  //         date={article?.date}
  //         source={article?.source}
  //         key={article?.id}
  //         id={article?.id}
  //         category={article?.category}
  //         readLater={article?.readLater}
  //       />
  //     ))}
  //   </section>
  // );
  // console.log(filter);
  return (
    <>
      {!hasErrors && newsContent}
      {hasErrors && <h1>Could not load news</h1>}
      {/* {filter ? filteredNewsContent : newsContent} */}
      {/* {filter?.length !== 0 ? filter : 'no filter'} */}

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
    </>
  );
};

export default Grid;
