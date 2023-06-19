import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { Image } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.Text`
  font-size: ${({ theme })=> theme.FONT_SIZE.XLG}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
  color: ${({ theme })=> theme.COLORS.GREEN_DARK};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  color: ${({ theme })=> theme.COLORS.GRAY_100};
`;

export const Bold = styled.Text`
 font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
`
