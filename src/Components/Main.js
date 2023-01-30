import React from "react";
import styled from "styled-components";
import DetailedSearch from "./DetailedSearch";
import Places from "./Places";
import { RiSearchLine } from "react-icons/ri";

function Main({ setHotel, setAnimation }) {
  return (
    <StyledMain>
      <Search>
        <input type="text" placeholder="Otel Arayın..." />
        <button>
          <RiSearchLine color="#a5afaf" size={25} />
        </button>
      </Search>
      <DetailedSearch />
      <Places setHotel={setHotel} setAnimation={setAnimation} />
    </StyledMain>
  );
}

export default Main;

const StyledMain = styled.div`
  width: 40%;
  margin: 0 1.5vw 0 1.5vw;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  height: 100vh;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 0 auto 0 auto;
    overflow-x: hidden;
  }
`;

const Search = styled.div`
  position: relative;
  margin-top: 8vh;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 4vh;
  }
  input {
    background-color: white;
    border: none;
    outline: none;
    height: 4rem;
    width: 94%;
    padding-left: 5%;
    color: rgba(165, 175, 175, 0.7);
    font-size: 1rem;
    border-radius: 1.5rem;

    :focus {
      color: rgba(165, 175, 175, 1);
    }
    ::placeholder {
      font-family: "Work Sans", sans-serif;
      opacity: 0.7;
    }
  }

  button {
    background-color: inherit;
    border: none;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }
`;
