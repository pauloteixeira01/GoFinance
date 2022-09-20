import React from "react";

import {
  StyledContainer,
  StyledHeader,
  StyledUserWrapper,
  StyledUserInfo,
  StyledPhoto,
  StyledUser,
  StyledUserGreeting,
  StyledUserName,
  StyledIcon,
} from "./styles";

const Home = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledUserWrapper>
          <StyledUserInfo>
            <StyledPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/23463866?v=4",
              }}
            />
            <StyledUser>
              <StyledUserGreeting>Hey,</StyledUserGreeting>
              <StyledUserName>Paulo Teixeira</StyledUserName>
            </StyledUser>
          </StyledUserInfo>
          <StyledIcon name="power" />
        </StyledUserWrapper>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Home;
