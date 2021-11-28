import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Disney from './pages/';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Disney />} />
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
