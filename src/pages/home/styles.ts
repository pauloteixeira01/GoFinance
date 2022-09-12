import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`;

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
export const StyledUserWrapper = styled.View`
  width: 100%;
  padding: 0px 24px;
`;

export const StyledUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const StyledPhoto = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`;

export const StyledUser = styled.View`
  margin-left: 17px;
`;

export const StyledUserGreeting = styled(StyledText)`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const StyledUserName = styled(StyledText)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;
