import React, {useContext} from "react";
import styled from "styled-components";

import logo from "../assets/logo.png";
import Colors from "../helpers/Colors";

import {LangContext} from '../helpers/Providers/lang.service'

const Header = () => {

  const langContext = useContext(LangContext);
  const { lang, setLang } = langContext;

  function changeLang(langValue) {
    setLang(langValue);
    localStorage.setItem('locale', langValue);
  }

  return (
    <Wrapper>
      <Left>
        <Logo src={logo} alt="adblocker logo" onClick={() => window.location.reload()}/>
      </Left>
      <Right>
      <LangSelect
          id="lang"
          name="lang"
          value={lang}
          onChange={(e) => {
            changeLang(e.target.value);
          }}
        >
          <option value="en">ENGLISH</option>
          <option value="de">DEUTSCH</option>
          {/* <option value="fr">FRANÇAIS</option>
          <option value="es">ESPAÑOL</option> */}
        </LangSelect>
        </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${Colors.souSkyBlue};
`;

const Left = styled.div`
  margin: 0 15px;
`;

const Right = styled.div`

`;

const LangSelect = styled.select`
  width: 110px;
  margin: 0 20px;
  padding: 0 15px;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  color: black;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  appearance: none;
  background-image: linear-gradient(45deg, rgba(0, 0, 0, 0) 50%, #04ccde 50%),
    linear-gradient(135deg, #04ccde 50%, rgba(0, 0, 0, 0) 50%);
  background-position: calc(100% - 15px) 10px, calc(100% - 10px) 10px,
    calc(100% - 1.5em) 3.5px;
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
`;

const Logo = styled.img`
  height: 60px;
  cursor: pointer;
`;

export default Header;
