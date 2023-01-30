import React from "react";
import styled from "styled-components";
import { MdStarRate } from "react-icons/md";
import datas from "../datas";

function Places({ setHotel, setAnimation }) {
  return (
    <StyledPlaces>
      <Title>
        <h1>Popüler Oteller</h1>
        <h3>Antalya</h3>
      </Title>
      <List>
        {datas[0].hotels.map((data) => (
          <Place
            onClick={() => {
              setHotel(data);
              setAnimation(true);
              setTimeout(() => {
                setAnimation(false);
              }, 1000);
            }}
            key={data.id}
          >
            <img src={data.room} alt="oda" />
            <Info>
              <h5>{data.desc}</h5>
              <h3>{data.name}</h3>
              <h4>${data.price} / Gecelik</h4>
              <Star>
                <MdStarRate color="#3E20D9" size={"1em"} />
                <span>{data.star} (60)</span>
              </Star>
            </Info>
          </Place>
        ))}
      </List>
    </StyledPlaces>
  );
}

export default Places;

const StyledPlaces = styled.div`
  margin-top: 3rem;

  @media screen and (max-width: 425px) {
    margin-top: 2rem;
  }
`;

const Title = styled.div`
  h1 {
    font-weight: 400;
    font-size: calc(15px + 1.90625vw);
    line-height: 0.5vw;
    color: white;
  }

  h3 {
    font-weight: 400;
    font-size: calc(15px + 0.40625vw);
    color: white;
  }

  @media screen and (max-width: 425px) {
    h1 {
      font-size: 2em;
      color: black;
    }
    h3 {
      font-size: 1em;
      color: black;
    }
  }
`;

const List = styled.div``;

const Place = styled.div`
  padding: 1rem;
  background-color: #e7f6f6;
  border-radius: 2rem;
  display: flex;
  cursor: pointer;
  margin-bottom: 1rem;
  border: 1px solid transparent;

  @media screen and (max-width: 768px) {
    height: 8rem;
    margin-top: 2rem;
    border-radius: 1rem;
    background-color: white;
  }
  img {
    width: calc(50px + 6.90625vw);
    height: 10rem;
    object-fit: cover;
    border-radius: 2rem;
    margin-right: 1rem;

    @media screen and (max-width: 768px) {
      width: 40%;
      height: auto;
      border-radius: 1rem;
    }
  }
  transition: 0.4s;
  @media screen and (min-width: 768px) {
    :hover {
      background-color: rgba(62, 32, 217, 0.1);
      color: white;
      border: 1px solid white;

      h5 {
        color: white;
      }
    }
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    color: #898b8b;
    font-weight: 400;
    font-size: calc(10px + 0.40625vw);
    margin: 0;
  }
  h3 {
    font-weight: 800;
    font-size: calc(15px + 0.80625vw);
    margin-top: 0.4vw;
    margin-bottom: 0.3vw;
  }
  h4 {
    font-weight: 400;
    font-size: calc(10px + 0.40625vw);
    margin-top: 0.4vw;
    margin-bottom: 0.6vw;
  }

  @media screen and (max-width: 425px) {
    justify-content: space-around;
    h5 {
      display: none;
    }

    h3 {
      font-size: 1.6em;
      margin-bottom: 0;
    }
    h4 {
      font-size: 1em;
    }
  }
`;

const Star = styled.div`
  display: flex;
  align-items: center;
  font-size: calc(10px + 0.30625vw);
  span {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`;
