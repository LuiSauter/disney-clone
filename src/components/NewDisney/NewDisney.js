import { Link } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";
import { Cards } from "../Cards";

export default function NewDisney() {
  const { newDisney } = useMovies();
  return (
    <Cards>
      <h4>New Disney</h4>
      <div>
        {newDisney &&
          newDisney.map((movie) => (
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