import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import Detail from "./Detail";
import NotFound from "./NotFound";

export default function HomePage() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/:rest*" element={<NotFound />} />
      </Routes>
    </>
  );
}
