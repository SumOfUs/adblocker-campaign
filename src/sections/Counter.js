import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountUp from "react-countup";

import Colors from "../helpers/Colors";

const Counter = () => {
  const [count, setCount] = useState(0);

  async function fetchData() {
    const res = await fetch(
      "https://hgoc1gxdu2.execute-api.eu-west-2.amazonaws.com/prod/adblockerdownloads/1"
    );
    res
      .json()
      .then((res) => {
        console.log(res.Item.counter.N);
        setCount(+res.Item.counter.N);
      })
      .catch((err) => {
        console.log(err);
        setCount(34583);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

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
