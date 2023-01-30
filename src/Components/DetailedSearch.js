import React from "react";
import styled from "styled-components";
import { HiMapPin, HiCalendarDays, HiUsers } from "react-icons/hi2";
import { HiOutlineSearch } from "react-icons/hi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Select from "react-select";

const options = [
  {
    value: 1,
    label: "İzmir",
  },
  {
    value: 2,
    label: "Antalya",
  },
  {
    value: 3,
    label: "İstanbul",
  },
];

function DetailedSearch() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <StyledDetailedSearch>
      <Title>Otel Bul</Title>
      <Options>
        <Option>
          <Icon>
            <HiMapPin size={25} color={"#3e20d9"} />
          </Icon>
          <Select
            options={options}
            defaultValue={options[0]}
            isSearchable={true}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: "#EBE8FB",
              }),
            }}
          />
        </Option>
        <hr />
        <Option>
          <Icon>
            <HiCalendarDays size={25} color={"#3e20d9"} />
          </Icon>

          <DatePicker
            className="date"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd.MM.yyyy"
          />
          <hr />
          <DatePicker
            className="date"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd.MM.yyyy"
          />
        </Option>
        <hr />
        <Option>
          <Icon>
            <HiUsers size={25} color={"#3e20d9"} />
          </Icon>
          <p>2 Yetişkin, 1 Çocuk</p>
        </Option>
      </Options>
      <Search>
        <HiOutlineSearch size={25} color={"#fff"} />
      </Search>
    </StyledDetailedSearch>
  );
}

export default DetailedSearch;

const StyledDetailedSearch = styled.div`
  margin-top: 3rem;
  height: 20rem;
  border-radius: 2rem;
  background-color: white;
  padding: 1rem 2rem;
  position: relative;

  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    height: auto;
  }
`;

const Title = styled.h2`
  font-size: calc(15px + 0.50625vw);
  font-weight: 600;
`;

const Options = styled.div`
  width: 85%;
  hr {
    background-color: #ebe8fb;
    width: 100%;
    height: 2px;
    margin: 1rem 0;
    border: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  input {
    font-family: "Work Sans", sans-serif;
    font-size: 1rem;
    color: #7862e6;
  }

  hr {
    width: 2.5px;
    margin: 0 1rem;
    height: 2rem;
    border: none;
    background-color: #ebe8fb;
  }

  p {
    color: #7862e6;
  }

  .date {
    outline: none;
    border: none;
    background: none;
  }

  .react-datepicker-wrapper {
    width: 30%;
  }

  #react-select-3-input {
    width: auto !important;

    @media screen and (max-width: 768px) {
      width: 40vw !important;
    }
  }
`;

const Icon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
  margin-right: 1rem;
  background-color: #ebe8fb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Search = styled.div`
  cursor: pointer;
  position: absolute;
  height: 100%;
  width: 15%;
  border-radius: 2rem;
  right: 0;
  top: 0;
  background-color: #3e20d9;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 3rem;
    position: relative;
    margin-top: 1.5rem;
  }
`;
