import React from "react";
import styled from "styled-components";
import { BsChevronRight } from "react-icons/bs";

function Info({ hotel, animation }) {
  return (
    <StyledInfo back={hotel.cover} animation={animation}>
      <Brightness></Brightness>
      <Title>
        <h3>{hotel.desc}</h3>
        <h1>{hotel.name}</h1>
        <h3>{hotel.description}</h3>
      </Title>
      <button>
        Rezervasyon Yap{" "}
        <BsChevronRight color="#fff" style={{ fontSize: "1.7vw" }} />
      </button>
    </StyledInfo>
  );
}

export default Info;

const StyledInfo = styled.div`
  width: 100%;
  border-radius: 65px 0px 0px 65px;
  background-image: url(${(props) => props.back});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 8vh;
  margin-bottom: 8vh;
  position: sticky;
  height: 84vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding-left: 4vw;
  animation: ${(props) => (props.animation ? "info-anim 1s" : "")};

  @media screen and (max-width: 768px) {
    display: none;
  }

  @keyframes info-anim {
    0% {
      margin-left: 0;
      opacity: 0.1;
    }
    50% {
      margin-left: 120%;
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      margin-left: 0;
    }
  }

  button {
    width: 15vw;
    height: 5vw;
    border: 2px solid white;
    border-radius: 3rem;
    background-color: transparent;
    color: white;
    font-size: clamp(1rem, 0.7117rem + 0.5089vw, 1.5rem);
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    position: absolute;
    bottom: 5rem;

    transition: 0.5s ease-in-out;

    :hover {
      background-color: rgba(255, 255, 255, 0.4);
    }

    @media screen and (max-width: 1400px) {
      width: 18vw;
    }
    @media screen and (max-width: 900px) {
      width: 25vw;
      height: 6vw;
    }
  }
`;

const Title = styled.div`
  margin-top: -4rem;
  h3 {
    font-weight: 400;
    font-size: clamp(1rem, 0.9462rem + 0.2025vw, 1.25rem);
    margin-top: 1vw;
    width: 50%;

    @media screen and (max-width: 1366px) {
      width: 90%;
    }
  }
  h1 {
    font-size: clamp(1.25rem, 0.712rem + 4.0253vw, 3.75rem);
    margin-bottom: 1rem;
    line-height: 6vw;
  }
`;

const Brightness = styled.div`
  position: absolute;
  z-index: -1;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  border-radius: 65px 0px 0px 65px;

  @media screen and (max-width: 425px) {
    border-radius: 5px;
  }
`;
