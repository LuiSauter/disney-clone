import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import PresentationPage from './pages/PresentationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PresentationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route
            exact
            path="*"
            element={
              <main>
                <p>There's nothing here❗</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
