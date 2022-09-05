import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StyledHeader = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const StyledUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledPhoto = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const StyledUser = styled.View`
  margin-left: 17px;
`;

export const StyledUserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}PX;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const StyledUserName = styled.Text``;
