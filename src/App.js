import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterEnd } from "./components/Footer/FooterEnd";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import PresentationPage from './pages/PresentationPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PresentationPage />} />
          <Route path="/home" element={<Home />} />
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
        <FooterEnd />
      </BrowserRouter>
    </div>
  );
}

export default App;
