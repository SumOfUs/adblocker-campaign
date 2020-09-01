import React from "react";
import styled from "styled-components";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <Wrapper>
      <Image src={cover} />
      <AdBlockButton
        href="https://getadblock.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get Adblock now
      </AdBlockButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 520px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 520px;
  object-fit: cover;
`;

const AdBlockButton = styled(Button)`
  position: absolute;
  right: 10px;
  bottom: 5px;
`;

export default HeroSection;
