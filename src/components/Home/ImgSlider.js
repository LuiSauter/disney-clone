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
      <figure>
        <Link to="#">
          <img src="/images/slider-badag.jpg" alt="Disney plus" />
        </Link>
      </figure>
      <figure>
        <Link to="#">
          <img src="/images/slider-badging.jpg" alt="Disney plus" />
        </Link>
      </figure>
      <figure>
        <Link to="#">
          <img src="/images/slider-scale.jpg" alt="Disney plus" />
        </Link>
      </figure>
      <figure>
        <Link to="#">
          <img src="/images/slider-scales.jpg" alt="Disney plus" />
        </Link>
      </figure>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  /* position: relative; */
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
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
  figure {
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    margin: 0;
    a {
      outline: none;
      border-radius: 4px;
      box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;
      display: block;
      position: relative;
      border: 3px solid transparent;
      padding: 2px;
      img {
        width: 100%;
        height: 100%;
        min-height: 130px;
        object-fit: cover;
        object-position: right;
      }
      &:hover {
        border: 3px solid rgba(249, 249, 249, 0.8);
        transition-duration: 200ms;
      }
    }
  }
`;