import React from "react";
import { Text, View } from "react-native";

import {
  StyledContainer,
  StyledHeader,
  StyledUserInfo,
  StyledPhoto,
  StyledUser,
  StyledUserGreeting,
  StyledUserName,
} from "./styles";

const Home = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledUserInfo>
          <StyledPhoto
            source={{
              uri: "https://avatars.githubusercontent.com/u/23463866?v=4",
            }}
          />
          <StyledUser>
            <StyledUserGreeting>StyledUserGreetingo</StyledUserGreeting>
            <StyledUserName>StyledUserNameo</StyledUserName>
          </StyledUser>
        </StyledUserInfo>
      </StyledHeader>
    </StyledContainer>
  );
};

export default Home;
