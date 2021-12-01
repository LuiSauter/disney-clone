import styled from "styled-components";

export const Cards = styled.section`
  padding: 0 0 26px;
  div {
    display: grid;
    gap: 1.5rem;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    article {
      padding-top: 56.25%;
      border-radius: 10px;
      box-shadow: rgb(0 0 0 / 73%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
      cursor: pointer;
      overflow: hidden;
      position: relative;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      border: 3px solid rgba(249, 249, 249, 0.1);
      img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
      }

      &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
          rgb(0 0 0 / 73%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        transform: scale(1.02);
      }
    }
  }
  /* figure {
    margin: 0;
  } */
  @media screen and (max-width: 768px) {
    div {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;