import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import { FormattedMessage } from "react-intl";

import avatar from "../assets/person.jpg";
import Colors from "../helpers/Colors";
import { tablet, mobile } from "../helpers/Devices";
import Counter from "./Counter";

const Right = () => {
  const shareUrl = "https://www.block-facebook.com/";
  return (
    <Wrapper>
      <CounterWrapper>
        <Counter />
      </CounterWrapper>
      <div>
        <Quote>
          <i className="fas fa-quote-left"></i>
          <div>
            <FormattedMessage
              id="msg.quote"
              defaultMessage="... if Facebook were around in the 1930s, it would have allowed Hitler to post 30-second ads on his‘solution’ to the ‘Jewish problem’."
            />
          </div>
        </Quote>
        <Thumbnail>
          <Person src={avatar} alt="celebrity" />
          <div>Sacha Baron Cohen</div>
        </Thumbnail>
      </div>
      <div>
        <ShareDesc>
          <FormattedMessage id="msg.share" defaultMessage="Share now :" />
        </ShareDesc>
        <SocialShares>
          <FacebookShareButton
            url={shareUrl}
            onShareWindowClose={() => console.log("Shared in FB")}
          >
            <FacebookIcon size={80} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={shareUrl}
            title="Join the Facebook ad boycott -- download the FB adblocker:"
            onShareWindowClose={() => console.log("Twitter shared")}
          >
            <TwitterIcon size={80} round />
          </TwitterShareButton>
          <EmailShareButton
            url={shareUrl}
            subject="Join the Facebook ad boycott -- download the FB adblocker"
            onShareWindowClose={() => console.log("Email shared")}
          >
            <EmailIcon size={80} round />
          </EmailShareButton>
        </SocialShares>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${tablet} {
    width: 100%;
    padding: 40px 0;
    max-width: 600px;
    margin: 0 auto;
  }
  @media ${mobile} {
    max-width: unset;
  }
`;

const CounterWrapper = styled.div`
  display: block;
  @media ${tablet} {
    display: none;
  }
`;
const Quote = styled.div`
  text-align: left;
  .fas {
    font-size: 48px;
    color: ${Colors.souSkyBlue};
    margin-bottom: 25px;
  }
  div {
    font-size: 26px;
    line-height: 40px;
    font-weight: 400;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0 30px;
  div {
    font-size: 24px;
    line-height: 40px;
    font-weight: 400;
    @media ${mobile} {
      font-size: 22px;
    }
  }
`;

const Person = styled.img`
  height: 80px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 50%;
`;

const ShareDesc = styled.div`
  font-size: 20px;
  margin: 10px 0;
  margin-bottom: 40px;
  text-align: left;
  color: ${Colors.black};
  text-transform: none;
  font-weight: 600;
`;

const SocialShares = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default Right;
