import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export type EditStyleProps = {
   type: boolean;
}

export type TypeInputStyle = 'NAME' | 'DESCRIPTION' | 'DATE';
type NewDietStyleProps ={
  typeInput?: TypeInputStyle;
  typeButtonNewDiet?: boolean; 
}

export const Container = styled(SafeAreaView)<EditStyleProps>`
  ${({ theme, type })=> css`
     background-color: ${theme.COLORS.GRAY_500};
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

export const Input = styled.TextInput<NewDietStyleProps>`
  width: 100%; 
  height: ${({ typeInput })=> typeInput === 'NAME' && 46 || 
  typeInput === 'DESCRIPTION' && 120 || 
  typeInput === 'DATE' && 58
  }px;
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  border-radius: 6px;
  border-width: 1px;
  border-color: ${({ theme })=> theme.COLORS.GRAY_500};
  margin-top: 6px;
  padding: 14px;
`;

export const TitleInput = styled.Text`
   ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_200};
     font-size: ${theme.FONT_SIZE.XSM}px;
     font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const DivDate = styled.View`
  flex-direction: row;
`

export const DivColumn = styled.View`
  flex-direction: column;
  width: 47%;
`

export const Status = styled.View<NewDietStyleProps>`
  width:8px;
  height:8px;
  border-radius:20px;
  background-color: ${({ theme, typeButtonNewDiet }) => typeButtonNewDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`