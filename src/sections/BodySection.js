import React from "react";
import styled from "styled-components";

import Left from "./BodyLeft";
import Right from "./BodyRight";
import { tablet } from "../helpers/Devices";

const BodySection = () => {
  return (
    <Wrapper>
      <Left />
      <Right />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 20px;
  min-height: 400px;
  @media ${tablet} {
    flex-direction: column;
  }
`;

export default BodySection;
