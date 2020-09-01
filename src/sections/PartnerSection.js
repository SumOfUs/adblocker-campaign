import React from "react";
import styled from "styled-components";

import SOU from "../assets/partnerLogos/sumofus.svg";
import ADB from "../assets/partnerLogos/adblock.png";

const Partner = () => {
  return (
    <Wrapper>
      <Title>Ad Blocker brought to you by:</Title>
      <LogoWrapper>
        <Logo src={SOU} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
        <Logo src={SOU} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
        <Logo src={SOU} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 300px;
  background: #717171;
  padding: 30px;
`;

const Title = styled.h2`
  color: white;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 60px;
  margin: 20px;
`;

export default Partner;
