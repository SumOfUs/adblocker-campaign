import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import Colors from "../helpers/Colors";

const Counter = () => {
  const count = parseInt(Math.random() * 100000);

  return (
    <>
      <Wrapper>
        <CountUp end={count} duration={2} />
      </Wrapper>
      <Desc>People are blocking the hate</Desc>
    </>
  );
};

export default Counter;

const Wrapper = styled.div`
  height: 60px;
  border-radius: 8px;
  background-color: ${Colors.souSkyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  letter-spacing: 6px;
  color: ${Colors.white};
  font-weight: 600;
`;

const Desc = styled.div`
  color: ${Colors.souSkyBlue};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  text-transform: uppercase;
  margin-bottom: 40px;
`;
