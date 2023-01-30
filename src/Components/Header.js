import React from "react";
import styled from "styled-components";
import { RiHotelLine, RiFlightTakeoffLine, RiTaxiFill } from "react-icons/ri";

function Header() {
  return (
    <StyledHeader>
      <Logo>
        otel <br />
        <b>fiyat</b>
      </Logo>
      <Nav>
        <ul>
          <li>
            <a href="#">
              <RiHotelLine size={"2.5em"} color={"#fff"} />
            </a>
          </li>
          <li>
            <a href="#">
              <RiFlightTakeoffLine size={"2.5em"} />
            </a>
          </li>
          <li>
            <a href="#">
              <RiTaxiFill size={"2.5em"} />
            </a>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header`
  width: 10%;
  background-color: #3e20d9;
  border-radius: 0px 65px 65px 0px;
  margin: 8vh 0px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: sticky;
  height: 84vh;

  @media screen and (max-width: 768px) {
    position: sticky;
    top: 0;
    width: 100%;
    height: 10vh;
    margin: 0;
    border-radius: 0;
    z-index: 1;
    align-items: flex-end;
  }
`;

const Logo = styled.div`
  font-size: 2vw;
  cursor: pointer;
  position: absolute;
  text-align: center;
  top: 5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.9vw;

  @media screen and (max-width: 768px) {
    left: 10%;
    top: 50%;
    font-size: 5vw;
    line-height: 6vw;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 35%;

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  ul {
    list-style-type: none;
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media screen and (max-width: 768px) {
      flex-direction: row;
    }
    li {
      text-align: center;

      svg {
        font-size: clamp(1rem, 0.879rem + 0.4557vw, 1.5625rem);
      }
    }
  }

  a {
    text-decoration: none;
    color: #7862e6;
    :hover {
      color: #fff;
    }
  }
`;
