import React from "react";
import styled from "styled-components";
import Colors from "../helpers/Colors";
import { tablet } from "../helpers/Devices";

const MessageSection = () => {
  return (
    <Wrapper>
      <Content>Facebook Ad Boycott: Download the Ad Blocker</Content>
      <Desc>
        <span style={{ fontWeight: 500 }}>
          Click to download the free, simple ad blocker. You can easily
          whitelist sites that aren't Facebook with just one click.
        </span>
        <span style={{ fontWeight: 300, marginLeft: "8px", display: "none" }}>
          You can choose to only block ads on facebook, not other sites, by
          adjusting the settings as shown further below.
        </span>
      </Desc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 150px;
  background-color: ${Colors.lightGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  @media ${tablet} {
    padding: 15px;
    border-radius: 0;
  }
`;

const Content = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: ${Colors.black};
  margin-bottom: 15px;
`;

const Desc = styled.div`
  /* color: ${Colors.black}; */
`;

export default MessageSection;
