import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type StaticsStyleProps = {
 color?: string;
 isDiet?: boolean;
}

export const Container = styled(SafeAreaView)`
  padding: 24px;
`;

export const HeaderContainer = styled.View<StaticsStyleProps>`
    flex: 1;
    background-color: ${({ theme, isDiet })=> isDiet && theme.COLORS.GREEN_LIGHT || !isDiet && theme.COLORS.RED_LIGHT};
`

export const GeneralStatistics = styled(SafeAreaView)`
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme })=> theme.COLORS.WHITE};
  border-radius: 24px;
  margin-top: -14%;
  align-items: center;
  padding: 0px 14px;
`;

export const Text = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
`;

export const Cards = styled.View`
  background-color: ${({ theme })=> theme.COLORS.GRAY_600};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  width: 100%;
`;

export const TitleCard = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  font-size: ${({ theme })=> theme.FONT_SIZE.LG}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
  
`

export const SubTitleCard = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  text-align: center;
`
export const CardsSmall = styled.View<StaticsStyleProps>`
  background-color: ${({ theme, color })=> color === 'GREEN' && theme.COLORS.GREEN_LIGHT || color === 'RED' && theme.COLORS.RED_LIGHT};
  align-items: center;
  flex-direction: column;
  padding: 24px;
  border-radius: 8px;
  width: 47%;
`;

export const Div = styled.View`
  flex-direction: row;
`