import { Link } from "react-router-dom";
import { Cards } from "../Cards";

export default function Trendings() {
  return (
    <Cards>
      <h4>Trendings</h4>
      <div>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/501783804F435A386DBC4736F529A8EF664B1817CCB0B552E52D825B85B0A97B/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
      </div>
    </Cards>
  );
}