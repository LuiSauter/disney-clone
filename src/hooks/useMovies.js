import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
import dataMovies from '../assets/data/disneyPlusMoviesData.json'

export const useMovies = () => {
  const [movies, setstate] = useState(null);
  const dispatch = useDispatch()
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    const movies = dataMovies.movies;
    movies.map((movie) => {
      const head = Date.now().toString(36);
      const tail = Math.random().toString(36).substr(2);
      switch (movie.type) {
        case "recommend": {
          recommends = [...recommends, { id: head + tail, ...movie }];
          break;
        }
        case "new": {
          newDisneys = [...newDisneys, { id: head + tail, ...movie }];
          break;
        }
        case "original": {
          originals = [...originals, { id: head + tail, ...movie }];
          break;
        }
        case "trending": {
          trending = [...trending, { id: head + tail, ...movie }];
          break;
        }
        default:
          break;
      }
      return movie;
    });
    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName])

  useEffect(() => {
    setstate()
  }, [])
  return {};
}