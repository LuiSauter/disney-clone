import styled from "styled-components";

export default function NotFound() {
  return (
    <Not404>
      <img src="/images/logo-disney.svg" alt="Disney plus" />
      <h2>
        <span>404</span> There's nothing here❗
      </h2>
    </Not404>
  );
}

const Not404 = styled.main`
  display: grid;
  place-content: center;
  place-items: center;
  min-height: 100vh;
  padding: 3rem 0;
  img {
    width: 200px;
  }
  span {
    font-size: 2rem;
  }
`