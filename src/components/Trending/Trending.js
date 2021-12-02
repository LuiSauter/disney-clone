import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { Cards } from "../Cards";

export default function Trendings() {
  const {trending} = useMovies()
  return (
    <Cards>
      <h4>Trendings</h4>
      <div>
        {trending &&
          trending.map((movie) => (
            <article key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </article>
          ))}
      </div>
    </Cards>
  );
}