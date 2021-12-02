import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllMovies } from "../features/movie/movieSlice";
export default function Detail() {
  const { id } = useParams();
  const allMovies = useSelector(selectAllMovies)
  // console.log(allMovies.includes(movie => id));
  return (
    <div>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
      <h2>Hola</h2>
    </div>
  );
}
