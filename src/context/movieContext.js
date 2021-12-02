import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import dataMovies from "../assets/data/disneyPlusMoviesData.json";
import { selectNewDisney, selectOriginal, selectRecommended, selectTrending, setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

const movieContext = createContext();

export const useMovieContext = () => useContext(movieContext)

const moviesCtrl = {
  recommends: [],
  newDisneys: [],
  originals: [],
  trending: [],
};
export const MovieContextProvider = ({children}) => {
  const [moviesState, setMoviesState] = useState(null);

  const userName = useSelector(selectUserName)
  const recomend = useSelector(selectRecommended);
  const newDisney = useSelector(selectNewDisney);
  const original = useSelector(selectOriginal);
  const trend = useSelector(selectTrending);
  const dispatch = useDispatch();

  const switching = (movie) => {
    const { type } = movie;
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substr(2);
    switch (type) {
      case "recommend": {
        moviesCtrl.recommends = [
          { id: head + tail, ...movie },
          ...moviesCtrl.recommends,
        ];
        break;
      }
      case "new": {
        moviesCtrl.newDisneys = [
          { id: head + tail, ...movie },
          ...moviesCtrl.newDisneys,
        ];
        break;
      }
      case "original": {
        moviesCtrl.originals = [
          { id: head + tail, ...movie },
          ...moviesCtrl.originals,
        ];
        break;
      }
      case "trending": {
        moviesCtrl.trending = [
          { id: head + tail, ...movie },
          ...moviesCtrl.trending,
        ];
        break;
      }
      default:
        break;
    }
  }

  const dispatching = useCallback(() => {
    dispatch(
      setMovies({
        recommend: moviesCtrl.recommends,
        newDisney: moviesCtrl.newDisneys,
        original: moviesCtrl.originals,
        trending: moviesCtrl.trending,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    let unsubscribe;
    const movies = dataMovies.movies;
    movies.map((movie) => {
      return switching(movie);
    });
    unsubscribe = dispatching();
    return () => unsubscribe && unsubscribe();
  }, [dispatching]);

  useEffect(() => {
    setMoviesState({
      recommend: recomend,
      newDisney: newDisney,
      original: original,
      trending: trend,
    });
  }, [newDisney, original, recomend, trend]);

  return (
    <movieContext.Provider value={{ moviesState }}>
      {children}
    </movieContext.Provider>
  );
}