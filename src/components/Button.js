import styled from "styled-components";

import Colors from "../helpers/Colors";
import { mobile, mobileSmall } from "../helpers/Devices";

const Button = styled.a`
  height: 80px;
  width: 400px;
  background-color: ${Colors.redOrange};
  outline: 0;
  border: 0;
  border-radius: 28px;
  border-bottom-left-radius: 0;
  color: white;
  font-size: 22px;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 5px 15px ${Colors.buttonShadow};
    transform: scale(1.01);
  }
  @media ${mobile} {
    width: 320px;
    font-size: 18px;
  }
  @media ${mobileSmall} {
    width: 100%;
    font-size: 16px;
    height: 60px;
  }
`;

export default Button;
