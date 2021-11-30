import styled from "styled-components";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import { Link } from "react-router-dom";

export default function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <picture>
        <Link to="/">
          <img src="/images/slider-badag.jpg" alt="Disney plus" />
        </Link>
      </picture>
      <picture>
        <Link to="/">
          <img src="/images/slider-badging.jpg" alt="Disney plus" />
        </Link>
      </picture>
      <picture>
        <Link to="/">
          <img src="/images/slider-scale.jpg" alt="Disney plus" />
        </Link>
      </picture>
      <picture>
        <Link to="/">
          <img src="/images/slider-scales.jpg" alt="Disney plus" />
        </Link>
      </picture>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  position: relative;
  margin: 20px auto 0 auto;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 1s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active butto:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -55px;
  }
  .slick-next {
    right: -55px;
  }
  picture {
    border-radius: 4px;
    cursor: pointer;
    position: relative;

    a {
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;
      display: block;
      position: relative;
      padding: 4px;
      img {
        width: 100%;
        height: 100%;
        min-height: 130px;
        object-fit: cover;
        object-position: right;
      }
      &:hover {
        padding: 0;
        border: 4px solid rgba(249, 249, 249, 0.8);
        transition-duration: 200ms;
      }
    }
  }
`;