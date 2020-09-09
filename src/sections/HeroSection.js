import React from "react";
import styled from "styled-components";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";
import { mobileSmall } from "../helpers/Devices";

const HeroSection = () => {
  const url = "https://adblockultimate.net/browsers";

  console.log(url);
  return (
    <Wrapper>
      <Image src={cover} />
      <AdBlockButton href={url} target="_blank" rel="noopener noreferrer">
        Download the ad blocker
      </AdBlockButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 420px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const AdBlockButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 5px;
  @media ${mobileSmall} {
    right: 0;
  }
`;

export default HeroSection;
