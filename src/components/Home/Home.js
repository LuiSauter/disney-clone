import { ContainerHome } from "./ContainerHome";
import NewDisney from "../NewDisney/NewDisney";
import Originals from "../Originals/Originals";
import Recomends from "../Recomends/Recomends";
import Trendings from "../Trending/Trending";
import Viewers from "../Viewers/Viewers";
import ImgSlider from "./ImgSlider";

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