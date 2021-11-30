import styled from "styled-components";
import Presentation from "../components/Presentation/Presentation";
import { useUser } from "../hooks/useUser";
import { FooterEnd } from '../components/Footer/FooterEnd'

export default function PresentationPage() {
  const { userLogget } = useUser();
  return (
    <>
      {userLogget === null ? (
        <>
          <Presentation />
          <FooterEnd />
        </>
      ) : (
        <>
          <LoaderDisney>
            <img src="/images/logo-disney.svg" alt="Disney plus" />
          </LoaderDisney>
        </>
      )}
    </>
  );
}

const LoaderDisney = styled.div`
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