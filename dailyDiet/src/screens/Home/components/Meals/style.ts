import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled.Text`
   color: ${({ theme })=> theme.COLORS.GRAY_100};
   font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
   font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
`;

export const Date = styled.Text`
 font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
 font-size: ${({ theme })=> theme.FONT_SIZE.XMD}px;
 color: ${({ theme })=> theme.COLORS.GRAY_100};
`;