import styled from "styled-components";

export const LoaderDisney = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #040714;
  img {
    width: 100%;
    max-width: 200px;
  }
`;