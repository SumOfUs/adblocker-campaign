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

import Button from "../components/Button";
import helper from "../assets/helper.png";

import Colors from "../helpers/Colors";
import { tablet } from "../helpers/Devices";

const LeftSection = () => {
  let detectDevice = "";
  if (isMobile) {
    detectDevice = isAndroid ? osName.toLowerCase() : isIOS ? osName : "";
  } else if (isChrome || isSafari || isFirefox || isEdge) {
    detectDevice = browserName.toLowerCase();
  }
  const url = `https://getadblock.com/${detectDevice}`;

  return (
    <Left>
      <p>
        <span className="bold">Facebook is reeling</span> as corporate giants —
        from Coke to Ford to Starbucks suspend their ads on the platform until
        Facebook cleans up its hate speech. Ads bring Facebook 99% of its
        income, so this boycott is hitting where it hurts — and
        <span className="bold"> now we can join in, too.</span>
      </p>
      <p>
        If millions of us{" "}
        <span className="bold">
          show Facebook we won’t allow any ads in our feeds until they stop the
          hate and disinformation by downloading a simple, free adblocker
        </span>{" "}
        — we can generate a new people-powered media wave and double the
        pressure on Facebook to act.
      </p>
      <ButtonBlock>
        <AdBlockButton href={url} target="_blank" rel="noopener noreferrer">
          Get Adblock now
        </AdBlockButton>
      </ButtonBlock>
      <p className="bold">Here are the steps to only block Facebook:</p>
      <p style={{ width: "85%" }}>
        <span>Settings</span>
        <i className="fas fa-arrow-right"></i>
        <span>Customize</span>
        <i className="fas fa-arrow-right"></i>
        <span>Show ads everywhere except for these domains</span>
        <i className="fas fa-arrow-right"></i>
        <span>Facebook.com</span>
      </p>
      <Image src={helper} />
    </Left>
  );
};

const Left = styled.div`
  width: 60%;
  padding-right: 30px;
  border-right: 1px solid ${Colors.darkGray};
  p {
    font-size: 18px;
    line-height: 26px;
  }
  .bold {
    font-weight: 700;
  }
  .fas {
    padding: 0 10px;
    font-size: 16px;
  }
  @media ${tablet} {
    width: 100%;
    padding-right: unset;
    border: none;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

const AdBlockButton = styled(Button)`
  margin: 10px 0 25px;
`;

const Image = styled.img`
  height: 600px;
  object-fit: contain;
  @media ${tablet} {
    height: unset;
    width: 100%;
  }
`;

export default LeftSection;
