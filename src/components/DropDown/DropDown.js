import styled from "styled-components";

export const DropDown = styled.div`
  position: absolute;
  top: 55px;
  right: -20px;
  width: 90px;
  text-align: center;
  padding: 0.5rem 0;
  letter-spacing: 2px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  background-color: rgb(19, 19, 19);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  opacity: 0;
  transform: translateY(-250%);
  span {
    font-size: 0.9rem;
    text-align: center;
  }
`;