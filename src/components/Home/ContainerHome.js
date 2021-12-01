import styled from "styled-components";

export const ContainerHome = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  width: 100vw;
  top: 72px;
  width: 100%;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;
  &:after {
    background: url("images/home-background.png") center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    bottom: 0;
    opacity: 1;
    z-index: -1;
  }
  @media screen and (max-width: 768px) {
    top: 50px;
  }
`;