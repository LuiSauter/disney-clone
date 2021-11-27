import styled from "styled-components";

export const NavMenu = styled.div`
  width: fit-content;
  box-sizing: border-box;
  padding: 1rem 1rem;
  display: flex;
  flex-flow: row;
  justify-content: flex-start;
  align-items: center;
  a {
    &:last-child {
      margin-right: 0px;
    }
    box-sizing: border-box;
    margin: 0 1rem;
    letter-spacing: 1.5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    svg {
      height: 18px;
    }
    span {
      margin-left: 1rem;
      position: relative;
      padding: 2px 0;
      white-space: nowrap;
      &:before {
        position: absolute;
        display: block;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        right: 0px;
        opacity: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 768px) {
    /* display: none; */
    span {
      display: none;
    }
    a svg {
      height: 22px;
      width: 22px;
    }
  }
`;