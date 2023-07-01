import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";


export type EditStyleProps = {
   type: boolean;
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