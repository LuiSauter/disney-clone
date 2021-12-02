import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { UserStateProvider } from './context/userContext';
import { MovieContextProvider } from "./context/movieContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserStateProvider>
        <MovieContextProvider>
          <App />
        </MovieContextProvider>
      </UserStateProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);