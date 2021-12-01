import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PresentationPage from "./pages/PresentationPage";
import HomePage from "./pages/PublicPage";
import PrivateRoute from "./routers/PrivateRoutes";
import PublicRoutes from "./routers/PublicRoutes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoutes>
                <PresentationPage />
              </PublicRoutes>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
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
