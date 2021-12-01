import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from '../../features/user/userSlice'
import dataMovies from '../../assets/data/disneyPlusMoviesData.json'

import { ContainerHome } from "./ContainerHome";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recomends from "../Recomends/Recomends";
import Trendings from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";
import ImgSlider from "./ImgSlider";
import { setMovies } from "../../features/movie/movieSlice";

export default function Home() {
  return (
    <ContainerHome>
      <ImgSlider />
      <Viewers />
      <Recomends />
      <NewDisney />
      <Originals />
      <Trendings />
    </ContainerHome>
  );
}