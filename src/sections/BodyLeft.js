import React from "react";
import styled from "styled-components";

import Button from "../components/Button";
import helper from "../assets/helper.png";

const LeftSection = () => {
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
        <AdBlockButton
          href="https://getadblock.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
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
  border-right: 1px solid #d7d7d7;
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
`;

export default LeftSection;
