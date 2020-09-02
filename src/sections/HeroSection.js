import React from "react";
import styled from "styled-components";
import {
  browserName,
  osName,
  isMobile,
  isIOS,
  isAndroid,
  isChrome,
  isSafari,
  isFirefox,
  isEdge,
} from "react-device-detect";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";

const HeroSection = () => {
  let detectDevice = "";
  if (isMobile) {
    detectDevice = isAndroid ? osName.toLowerCase() : isIOS ? osName : "";
  } else if (isChrome || isSafari || isFirefox || isEdge) {
    detectDevice = browserName.toLowerCase();
  }
  const url = `https://getadblock.com/${detectDevice}`;

  console.log(url);
  return (
    <Wrapper>
      <Image src={cover} />
      <AdBlockButton href={url} target="_blank" rel="noopener noreferrer">
        Get Adblock now
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
`;

export default HeroSection;
