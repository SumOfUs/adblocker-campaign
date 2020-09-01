import React from "react";
import styled from "styled-components";

const MessageSection = () => {
  return (
    <Wrapper>
      <Content>Facebook Ad Boycott: Download the Ad Blocker</Content>
      <Desc>
        <span style={{ fontWeight: 500 }}>
          Click to download the free, simple ad blocker.
        </span>
        <span style={{ fontWeight: 300, marginLeft: "8px" }}>
          You can choose to only block ads on facebook, not other sites, by
          adjusting the settings as shown further below.
        </span>
      </Desc>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 150px;
  background-color: #172340;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
`;

const Content = styled.div`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin-bottom: 15px;
`;

const Desc = styled.div`
  color: white;
`;

export default MessageSection;
