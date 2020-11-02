import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";

import Button from "../components/Button";
import helper from "../assets/helper.png";

import Colors from "../helpers/Colors";
import { tablet, mobileSmall } from "../helpers/Devices";
import Counter from "./Counter";
import { API_URL, ADBLOCKER_URL } from "../helpers/Constants";

const LeftSection = () => {
  const { formatMessage: fm } = useIntl();

  const messages = defineMessages({
    msg1: {
      id: "msg.bodyMsg1",
      defaultMessage:
        "<bold>Facebook is swamped</bold> with conspiracy theories, white supremacy, hate speech, and election suppression. It’s <bold>time they clean up the mess.</bold>",
    },
    msg2: {
      id: "msg.bodyMsg2",
      defaultMessage:
        "<bold>Ads bring Facebook 99% of its income.</bold> That’s why when corporate giants from Coke to Ford to Starbucks suspended their ads in protest of Facebook’s hate speech problem -- it struck a nerve. <bold>Now we can join in, too.</bold>",
    },
    msg3: {
      id: "msg.bodyMsg3",
      defaultMessage:
        "If millions of us <bold>tell Facebook we won’t allow them to show us any ads until they stop the hate and disinformation,</bold> we can generate a new people-powered media wave and double the pressure on Facebook to act. <bold>All it takes is a simple, free adblocker:</bold>",
    },
    msg4: {
      id: "msg.bodyMsg4",
      defaultMessage:
        "To whitelist sites other than Facebook, click the AdBlocker Ultimate icon in your browser, and then toggle to <bold> 'enable on this site' </bold>",
    },
  });

  const sectionMsg1 = fm(messages.msg1, {
    bold: (str) => <b>{str}</b>,
  });

  const sectionMsg2 = fm(messages.msg2, {
    bold: (str) => <b>{str}</b>,
  });

  const sectionMsg3 = fm(messages.msg3, {
    bold: (str) => <b>{str}</b>,
  });

  const sectionMsg4 = fm(messages.msg4, {
    bold: (str) => <b>{str}</b>,
  });

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
    <Left>
      <CounterWrapper>
        <Counter />
      </CounterWrapper>

      <p>{sectionMsg1}</p>

      <p>{sectionMsg2}</p>

      <p>{sectionMsg3}</p>

      <ButtonBlock>
        <AdBlockButton
          href={ADBLOCKER_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => increment()}
        >
          <FormattedMessage
            id="msg.downloadAdBlocker"
            defaultMessage="Download the ad blocker"
          />
        </AdBlockButton>
      </ButtonBlock>
      <div>{sectionMsg4}</div>
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
