import { useMovieContext } from '../context/movieContext';

export const useMovies = () => {
  const { moviesState } = useMovieContext();
  const { newDisney, original, recommend, trending } = moviesState;

  return { newDisney, original, recommend, trending };
};