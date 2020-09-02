import styled from "styled-components";

const Button = styled.a`
  height: 80px;
  width: 300px;
  background-color: #f8492d;
  outline: 0;
  border: 0;
  border-radius: 28px;
  border-bottom-left-radius: 0;
  color: white;
  font-size: 14px;
  font-weight: 500;
  /* text-transform: uppercase; */
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0px 5px 15px rgba(10, 14, 71, 0.2);
    transform: scale(1.01);
  }
`;

export default Button;
