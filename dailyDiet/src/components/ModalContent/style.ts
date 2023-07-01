import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex:1;
  justify-content: center;
  background-color: rgba(0,0,0,0.5);
`
export const ModalView = styled.View`
background-color: ${({ theme }) => theme.COLORS.WHITE};
border-radius: 8px;
margin:0px 20px;
justify-content: center;
align-items: center;
padding:24px ;
`
export const ModalAction = styled.View`
  flex-direction:row;
  justify-content: space-evenly;
`

export const Title = styled.Text`
  ${({ theme })=> css`
     color: ${theme.COLORS.GRAY_200};
     text-align:center;
     font-family: ${theme.FONT_FAMILY.BOLD};
     font-size: ${theme.FONT_SIZE.XMD}px;
     max-width: 230px;
  `}
`