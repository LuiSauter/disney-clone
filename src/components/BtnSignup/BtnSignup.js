import styled from "styled-components";

export const BtnSignup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  z-index: 100;
  a {
    display: block;
    width: 100%;
    max-width: 360px;
    padding: 1.1rem 0;
    margin: 1rem auto;
    border: 1px solid transparent;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    letter-spacing: 1.5px;
    font-weight: bold;
    font-size: 1.15rem;
    color: #f9f9f9;
    background-color: #0063e5;
    &:hover {
      background-color: #0483ee;
    }
  }
`;