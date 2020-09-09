import React from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import Colors from "../helpers/Colors";

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <Logo src={logo} alt="adblocker logo" />
      </Left>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid ${Colors.souSkyBlue};
`;

const Left = styled.div`
  margin: 0 15px;
`;

const Logo = styled.img`
  height: 60px;
`;

export default Header;
