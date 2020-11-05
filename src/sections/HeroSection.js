import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { FormattedMessage } from "react-intl";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";
import { mobileSmall } from "../helpers/Devices";
import {
  API_URL,
  ADBLOCKER_URL,
  ADBLOCKER_URL_GERMAN,
} from "../helpers/Constants";
import { LangContext } from "../helpers/Providers/lang.service";

const HeroSection = () => {
  const langContext = useContext(LangContext);
  const { lang } = langContext;

  function increment() {
    axios
      .put(API_URL, {})
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <Image src={cover} />
      <AdBlockButton
        href={lang === "en" ? ADBLOCKER_URL : ADBLOCKER_URL_GERMAN}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => increment()}
      >
        <FormattedMessage
          id="msg.downloadAdBlocker"
          defaultMessage="Download the ad blocker"
        />
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
