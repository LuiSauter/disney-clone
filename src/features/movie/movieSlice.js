import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectAllMovies = (state) => state.movies;
export const selectRecommended = (state) => state.movies.recommend;
export const selectNewDisney = (state) => state.movies.newDisney;
export const selectOriginal = (state) => state.movies.original;
export const selectTrending = (state) => state.movies.trending;

export default movieSlice.reducer;
