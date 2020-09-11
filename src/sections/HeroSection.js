import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import cover from "../assets/cover.jpg";
import Button from "../components/Button";
import { mobileSmall } from "../helpers/Devices";

const HeroSection = () => {
  const url = "https://adblockultimate.net/browsers";

  const fetchUrl =
    "https://aza6ttiq2i.execute-api.eu-west-1.amazonaws.com/prod/adblockerdownloads/1";

  useEffect(() => {
    // axios.defaults.headers.put["Access-Control-Allow-Origin"] = "*";
  }, []);

  function increment() {
    axios
      .put(fetchUrl, {})
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
        href={url}
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
