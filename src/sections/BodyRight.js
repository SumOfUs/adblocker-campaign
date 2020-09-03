import React from "react";
import styled from "styled-components";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import CountUp from "react-countup";

import avatar from "../assets/person.jpg";
import Colors from "../helpers/Colors";
import { tablet, mobile } from "../helpers/Devices";

const Right = () => {
  const url = "https://adblocker-campaign.netlify.app/";
  const count = parseInt(Math.random() * 100000);
  return (
    <Wrapper>
      <Counter>
        <CountUp end={count} duration={2} />
      </Counter>
      <Desc>Downloads</Desc>
      <Icon>
        <i className="fas fa-quote-left"></i>
        <span>
          Cras ultricies ligula sed magna dictum porta. Proin eget tortor risus.
          Mauris blandit aliquet elit, pulvinar a.
        </span>
      </Icon>
      <Person src={avatar} alt="celebrity" />
      <ShareDesc>Share now :</ShareDesc>
      <SocialShares>
        <FacebookShareButton
          url={url}
          onShareWindowClose={() => console.log("Shared in FB")}
        >
          <FacebookIcon size={80} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          onShareWindowClose={() => console.log("Twitter shared")}
        >
          <TwitterIcon size={80} round />
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          onShareWindowClose={() => console.log("Linkedin shared")}
        >
          <LinkedinIcon size={80} round />
        </LinkedinShareButton>
      </SocialShares>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 40px;
  width: 35%;
  display: flex;
  flex-direction: column;
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

const Counter = styled.div`
  height: 60px;
  border-radius: 8px;
  background-color: ${Colors.souSkyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  letter-spacing: 6px;
  color: ${Colors.white};
  font-weight: 600;
`;

const Desc = styled.div`
  color: ${Colors.souSkyBlue};
  font-size: 28px;
  text-align: center;
  margin: 10px 0;
  text-transform: uppercase;
  margin-bottom: 40px;
`;

const Icon = styled.div`
  text-align: left;
  .fas {
    font-size: 56px;
    color: ${Colors.souSkyBlue};
    margin-right: 30px;
  }
  span {
    font-size: 32px;
    line-height: 40px;
    font-weight: 400;
  }
`;

const Person = styled.img`
  height: 400px;
  object-fit: contain;
  margin: 20px 0;
`;

const ShareDesc = styled(Desc)`
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
