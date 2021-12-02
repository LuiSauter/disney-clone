import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { Cards } from "../Cards";

export default function Recomends() {
  const { recommend } = useMovies();
  return (
    <Cards>
      <h4>Recomends</h4>
      <div>
        {recommend &&
          recommend.map((movie) => (
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
