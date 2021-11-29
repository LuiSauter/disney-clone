import styled from "styled-components";
import { DropDown } from "../DropDown/DropDown";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2.2rem;
  background-color: #040714;
  backdrop-filter: blur(4px);
  transition: opacity 0.5s;
  z-index: 1000;
  header {
    display: flex;
    flex-direction: row;
  }
  button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    color: #fff;
  }
  .btn-signin p {
    display: flex;
    align-items: center;
    background-color: #0063e5;
    padding: 0.4rem 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 1.3rem;
    margin: 0;
    width: 120px;
    cursor: pointer;
    &:hover {
      background-color: #0483ee;
    }
  }
  picture {
    width: 70px;
    max-height: 52px;
    display: flex;
    justify-content: center;
    position: relative;
    user-select: none;
    img {
      left: 0;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    .img-user {
      border-radius: 50%;
      width: 45px;
      height: 45px;
    }
    &:hover {
      .img-user {
        opacity: .9;
        cursor: pointer;
      }
      ${DropDown} {
        opacity: 1;
        transition: opacity .5s;
        transform: translateY(0%);
      }
    }
  }
  .scroll-container {
    width: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    position: relative;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media screen and (min-width: 768px) {
    height: 70px;
    .btn-signin p {
      padding: 0.7rem 1rem;
    }
  }
`;