import { ViewersContainer } from "./ViewersContainer";

export default function Viewers() {
  return (
    <ViewersContainer>
      <div>
        <img src="/images/viewers-disney.png" alt="disney plus" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div>
        <img src="/images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </div>
      <div>
        <img src="/images/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </div>
    </ViewersContainer>
  );
}
