import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Button from "../components/Button";
import helper from "../assets/helper.png";

import Colors from "../helpers/Colors";
import { tablet, mobileSmall } from "../helpers/Devices";
import Counter from "./Counter";

const LeftSection = () => {
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
    <Left>
      <CounterWrapper>
        <Counter />
      </CounterWrapper>
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
        <AdBlockButton
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => increment()}
        >
          Download the ad blocker
        </AdBlockButton>
      </ButtonBlock>
      <div>
        To whitelist sites other than Facebook, click the AdBlocker Ultimate icon in your browser, and then toggle to <span className="bold">"enable on this site".</span> 
      </div>
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
    max-width: 600px;
    margin: 0 auto;
  }
`;

const CounterWrapper = styled.div`
  display: none;
  @media ${tablet} {
    display: block;
  }
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  @media ${mobileSmall} {
    margin: 0;
  }
`;

const AdBlockButton = styled(Button)`
  margin: 10px 0 25px;
`;

const Image = styled.img`
  height: 500px;
  object-fit: contain;
  margin: 15px auto;
  display: flex;
  @media ${tablet} {
    height: unset;
    width: 100%;
  }
`;

export default LeftSection;
