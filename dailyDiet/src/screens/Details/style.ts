import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type DetailsStyleProps = {
  type?: boolean;
}

export const Container = styled(SafeAreaView)<DetailsStyleProps>`
  ${({ theme, type })=> css`
     background-color: ${type === true ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
   flex: 0.2;
   flex-direction: row;
   padding: 24px;
`;

export const Title = styled.Text`
   ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_100};
     font-size: ${theme.FONT_SIZE.XMD}px;
     font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Div = styled.View`
 justify-content: space-between;
 flex-direction: row;
 width: 65%;
`

export const Container2 = styled.View`
   ${({ theme })=> css`
     background-color: ${theme.COLORS.WHITE};
     
  `};
  padding: 24px;
  flex: 1;
  flex-direction: column;
  margin-top: -35%;
  border-radius: 16px;
`

export const MealName = styled.Text`
  ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_100};
     font-size: ${theme.FONT_SIZE.XXMD}px;
     font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const MealDescription = styled.Text`
  ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_200};
     font-size: ${theme.FONT_SIZE.MD}px;
     font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Subtitle = styled.Text`
  ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_100};
     font-size: ${theme.FONT_SIZE.XSM}px;
     font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const MealDate = styled.Text`
   ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_200};
     font-size: ${theme.FONT_SIZE.MD}px;
     font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const MealIsDietView = styled.View`
     background-color: ${({ theme })=>theme.COLORS.GRAY_600};
     flex-direction: row;
     border-radius: 30%;
     padding: 8px 16px 8px 16px;
     align-items: center;
     justify-content: center;
     max-width: 150px;
     max-height: 34px;
`

export const MealIsDietText = styled.Text`
  ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_100};
     font-size: ${theme.FONT_SIZE.XSM}px;
     font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-left: 5px;
`

export const Status = styled.View<DetailsStyleProps>`
  width:10px;
  height:10px;
  border-radius:20px;
  background-color: ${({ theme, type }) => type && theme.COLORS.GREEN_DARK || !type && theme.COLORS.RED_DARK};
`

export const IconEdit = styled.Image`
  
`