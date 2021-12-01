import { Link } from "react-router-dom";
import { Cards } from "../Cards";

export default function Recomends() {

  return (
    <Cards>
      <h4>RecomendsContainer</h4>
      <div>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
        <article>
          <Link to="/">
            <img
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/87F1DCF36049558159913ADFD18A800DE1121771540033EC3A7651B8FE154CEB/scale?width=400&aspectRatio=1.78&format=jpeg"
              alt=""
            />
          </Link>
        </article>
      </div>
    </Cards>
  );
}
