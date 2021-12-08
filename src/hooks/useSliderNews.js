import { useSelector, useDispatch } from 'react-redux';
import { newsSelector, setSliderNews } from '../services/newsSlice';

function getRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function useSliderNews() {
  const dispatch = useDispatch();
  const { allNews, categories, sliderNews } = useSelector(newsSelector);

  if (sliderNews?.length !== 0) return;

  //   const empty = Object.keys(newsCategories).length === 0;

  if (categories) {
    const sliderItems = [
      getRandom(allNews),
      getRandom(allNews),
      getRandom(allNews),
    ];
    dispatch(setSliderNews(sliderItems));
    return sliderItems;
  }
}

export default useSliderNews;
