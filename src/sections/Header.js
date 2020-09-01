import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <BigContent>Block</BigContent>
        <SmallContent>the hate</SmallContent>
      </Left>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #00c0cf;
`;

const Left = styled.div`
  margin: 0 15px;
`;

const SmallContent = styled.div`
  font-size: 18px;
  text-transform: uppercase;
  line-height: 18px;
  font-weight: 600;
`;

const BigContent = styled(SmallContent)`
  color: red;
  font-weight: 700;
  font-size: 24px;
`;
export default Header;
