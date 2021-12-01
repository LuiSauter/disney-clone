import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
import movieReducer from '../features/movie/movieSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});