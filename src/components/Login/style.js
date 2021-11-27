import styled from "styled-components";

export const Container = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #040714;
  figure {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    background-image: url("/images/background-mobile-2.jpeg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    z-index: 0;
  }
  .container-hero {
    width: 100%;
    min-height: 100vh;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40vw 5vw 20vw;
    height: 100%;
    p {
      font-size: 0.7rem;
      color: #c0c0c0;
      text-align: center;
    }
  }
  @media screen and (min-width: 1024px) {
    figure {
      background-image: url("/images/background-desk-2.jpeg");
    }
    .container-hero {
      justify-content: center;
      align-items: flex-start;
      padding: 5.6vw;
    }
  }
`;
export const Content = styled.section`
  padding: 5.6vw;
  /* min-height: 100vh; */
  z-index: 1;
  h2 {
    line-height: 1.7;
    font-size: 1.8rem;
    margin: 0;
  }
  article {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    transition-timing-function: ease-out;
    transition: opacity 0.2s;
    width: 100%;
    z-index: 1;
    margin: auto;
    gap: 1rem;
    @media screen and (min-width: 765px) {
      grid-template-columns: 1fr 1fr;
      margin: auto;
      h2 {
        font-size: 2.6rem;
      }
    }
  }
`;
export const FooterContent = styled.section`
  padding: 5vw;
  z-index: 1;
  article {
    margin: auto;
    width: 100%;
    height: 100%;
  }
  img {
    max-width: 80px;
  }
`
export const CTAGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px ,1fr));
  margin-top: 1rem;
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    img {
      width: 100%;
    }
    ul {
      margin-bottom: 1rem;
    }
    li {
      color: #c0c0c0;
      line-height: 2;
    }
  }
`
export const CTA = styled.article`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  z-index: 1;
  h1 {
    line-height: 1.7;
    font-size: 1.4rem;
    margin: 0 0 1rem 0;
  }
  @media screen and (min-width: 1024px) {
    h1 {
      text-align: left;
      font-size: 2.6rem;
    }
    align-items: flex-start;
  }
`;
export const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 1px;
  margin: 0 auto 1.5rem auto;
  width: 100%;
  display: block;
`
export const Description = styled.p`
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 1.5;
  color: #c0c0c0;
  font-weight: 400;
`
export const Button = styled.a`
  position: absolute;
  bottom: 2vw;
  cursor: pointer;
  padding: 6px;
  width: 3rem;
  height: 3rem;
  color: #fffa;
  border: none;
  background-color: transparent;
  &:hover {
    color: #fff;
  }
  -webkit-animation: bounce 1.75s infinite;
  animation: bounce 1.75s infinite;
  @-webkit-keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    to {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }
  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    to {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }
`;
