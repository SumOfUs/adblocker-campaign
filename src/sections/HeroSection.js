import React from "react";
import styled from "styled-components";
import axios from "axios";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";
import { mobileSmall } from "../helpers/Devices";
import { API_URL, ADBLOCKER_URL } from '../helpers/Constants';


const HeroSection = () => {

  function increment() {
    axios
      .put(API_URL, {})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Wrapper>
      <Image src={cover} />
      <AdBlockButton
        href={ADBLOCKER_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => increment()}
      >
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
