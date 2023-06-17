import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { } from "@expo/vector-icons";

type MealsListProps = {
    type: string;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Meal = styled(TouchableOpacity)`
  flex-direction: row;
  border: 1px;
  border-color: ${({ theme })=> theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 14px 16px 14px 12px;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;
`

export const teste = styled.View`
   justify-content: flex-start;
   flex-direction: row;
   align-items: center;
`

export const Time = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  font-size: ${({ theme })=> theme.FONT_SIZE.SM}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
`

export const LineVertical = styled.Text`
   color: ${({ theme })=> theme.COLORS.GRAY_400};
   margin-left: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_200};
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  margin-left: 12px;
`

export const Status = styled.View<MealsListProps>`
  width:14px;
  height:14px;
  border-radius:20px;
  background-color: ${({ theme, type }) => type === 'NEGATIVE' && theme.COLORS.GREEN_MID || type === 'NEGATIVE' && theme.COLORS.RED_LIGHT};
  
`