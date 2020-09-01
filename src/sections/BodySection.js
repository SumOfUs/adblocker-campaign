import React from "react";
import styled from "styled-components";

import Left from "./BodyLeft";
import Right from "./BodyRight";

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
`;

export default BodySection;
