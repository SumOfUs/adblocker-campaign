import React from "react";
import styled from "styled-components";

// import SOUW from "../assets/partnerLogos/sumofus-white.svg";
import SOUD from "../assets/partnerLogos/sumofus-dark.svg";
import ADB from "../assets/partnerLogos/adblock.png";

const Partner = () => {
  return (
    <Wrapper>
      <Title>Ad Blocker brought to you by:</Title>
      <LogoWrapper>
        <Logo src={SOUD} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
        <Logo src={SOUD} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
        <Logo src={SOUD} alt="SumOfUs" />
        <Logo src={ADB} alt="Ad Block" />
      </LogoWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 300px;
  padding: 30px;
  margin-top: 60px;
`;

const Title = styled.h2`
  color: #f8492d;
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
