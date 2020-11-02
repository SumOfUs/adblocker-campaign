import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

// import SOUW from "../assets/partnerLogos/sumofus-white.svg";
import SOUD from "../assets/partnerLogos/sumofus-dark.svg";
// import ADB from "../assets/partnerLogos/adblock.png";
// import ADBU from "../assets/partnerLogos/adblock-ultimate.png";

import Colors from "../helpers/Colors";

const Partner = () => {
  return (
    <Wrapper>
      <Title>
        <FormattedMessage
          id="msg.broughtToYou"
          defaultMessage="Ad Blocker brought to you by:"
        />
      </Title>
      <LogoWrapper>
        <Logo src={SOUD} alt="SumOfUs" />
        {/* <Logo src={ADB} alt="Ad Block" />
        <Logo src={SOUD} alt="SumOfUs" />
        <Logo src={ADBU} alt="Ad Block Ultimate" />
        <Logo src={SOUD} alt="SumOfUs" />
        <Logo src={ADBU} alt="Ad Block" /> */}
      </LogoWrapper>
      <Message>
        <FormattedMessage
          id="msg.emailMsg"
          defaultMessage="If you're part of an organization which would like to join the Block
        Hate coalition, email"
        />
        &nbsp;
        <a href="mailto:hallo@sumofus.org">hallo@sumofus.org</a>
      </Message>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* min-height: 300px; */
  padding: 30px;
  margin-top: 20px;
  background-color: ${Colors.lightGrey};
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const Title = styled.h3`
  color: ${Colors.souDarkBlue};
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 60px;
  margin: 10px 0 30px;
`;

const Message = styled.div`
  font-size: 20px;
  a {
    text-decoration: none;
    color: ${Colors.souSkyBlue};
  }
`;

export default Partner;
