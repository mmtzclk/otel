import React, { useState } from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Info from "../Components/Info";
import styled from "styled-components";

import back from "../images/back-min.jpg";

function Home() {
  const [hotel, setHotel] = useState({
    id: 1,
    name: "Otel İsmi",
    desc: "Otelle ilgili kısa açıklama",
    description:
      "Like every collection owner, Lara Barut Collection develops its unique assembly with happiness, a richness of choices and creative touches. Lara Barut Collection welcomes its guests with an original, stylish and brand new holiday concept.",
    price: 25,
    star: 4.4,
    cover: back,
    photos: [
      {
        id: 1,
        url: "url",
      },
      {
        id: 2,
        url: "url",
      },
      {
        id: 3,
        url: "url",
      },
    ],
  });

  const [animation, setAnimation] = useState(false);

  return (
    <StyledHome>
      <BackGround back={hotel.cover}></BackGround>
      <Header />
      <Main setHotel={setHotel} setAnimation={setAnimation} />
      <div className="ani">
        <Info hotel={hotel} animation={animation} />
      </div>
    </StyledHome>
  );
}

export default Home;

const StyledHome = styled.div`
  display: flex;

  .ani {
    width: 50%;

    @media screen and (max-width: 425px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackGround = styled.div`
  background-image: url(${(props) => props.back});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: 20% 20%;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  z-index: -999;
  filter: blur(80px);
  transition: 0.8s all ease;

  @media screen and (max-width: 425px) {
    background-image: none;
    filter: none;
  }
`;
