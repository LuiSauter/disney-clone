import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { Cards } from "../Cards";

export default function Originals() {
  const { original } = useMovies();
  return (
    <Cards>
      <h4>Originals</h4>
      <div>
        {original &&
          original.map((movie) => (
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