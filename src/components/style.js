import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #040714;
  z-index: -2;
`

export const BgImage = styled.div`
  height: 100%;
  width: 100%;
  background-position: top;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('/images/background-mobile-2.jpeg');
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`

export const ContentHero = styled.section`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 250px 25px 100px 25px;
  height: 100%;
`

export const Content = styled.section`
  padding: 50px 25px;
`

export const CTA = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  /* margin: auto; */
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width: 100%;
  z-index: 1;
`

export const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 1.5rem;
  width: 100%;
  display: block;
`

export const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 1.5rem;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 1.15rem;
  padding: 1.1rem 0;
  border: 1px solid transparent;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: #0483ee;
  }
`

export const Description = styled.h3`

`

export const Footer = styled.p`
  font-size: .7rem;
  color: #c0c0c0;
`

export const Button = styled.button`
  position: absolute;
  bottom: 2vw;
  cursor: pointer;
  padding: 6px;
  width: 3rem;
  height: 3rem;
  color: #fff;
  border: 1px solid red;
  background-color: transparent;
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
