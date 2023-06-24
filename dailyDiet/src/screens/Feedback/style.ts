import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type FeedbackStyleProps = {
    isDiet?: boolean;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.Text<FeedbackStyleProps>`
  font-size: ${({ theme })=> theme.FONT_SIZE.XLG}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isDiet })=> isDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  max-width: 85%;
  text-align: center;
`;

export const Bold = styled.Text`
 font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
`
