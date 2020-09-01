import React from "react";
import styled from "styled-components";

const Footer = () => {
  const year = new Date().getFullYear();

  const navOptions = [
    { title: "Home", link: "https://www.sumofus.org/" },
    { title: "About", link: "https://www.sumofus.org/about/" },
    { title: "Privacy Policy", link: "https://www.sumofus.org/privacy/" },
    { title: "Contact", link: "https://www.sumofus.org/contact/" },
  ];

  const socialMediaOptions = [
    {
      iconClass: "fab fa-facebook-f",
      link: "https://www.facebook.com/SumOfUsOrg/",
    },
    { iconClass: "fab fa-twitter", link: "https://twitter.com/SumOfUs/" },
    { iconClass: "fab fa-github", link: "https://github.com/SumOfUs/" },
    {
      iconClass: "fab fa-youtube",
      link: "https://www.youtube.com/user/SumOfUsTube/",
    },
    {
      iconClass: "fab fa-instagram",
      link: "https://www.instagram.com/sumofus/",
    },
  ];

  return (
    <Wrapper>
      <Left>
        <Links>
          {navOptions.map((item) => {
            return (
              <Link
                key={Math.random()}
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                {item.title}
              </Link>
            );
          })}
        </Links>
        <Copyright>
          {`© ${year} SumOfUs, Creative Commons Attribution 3.0 Unported License.`}
        </Copyright>
      </Left>
      <Right>
        <Links>
          {socialMediaOptions.map((item) => {
            return (
              <Link
                key={Math.random()}
                target="_blank"
                rel="noopener noreferrer"
                href={item.link}
              >
                <i className={item.iconClass} aria-hidden="true" />
              </Link>
            );
          })}
        </Links>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
`;

const Right = styled.div``;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 18px;
  padding-right: 18px;
  color: black;
  &:hover {
    color: #00c0cf;
  }
`;

const Copyright = styled.div``;

export default Footer;
