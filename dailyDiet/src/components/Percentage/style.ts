import styled from "styled-components/native";

export const Container = styled.View`
   flex-direction: column;
   justify-content: center;
   align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_100};
  font-family: ${({ theme })=> theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme })=> theme.FONT_SIZE.XLG}px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme })=> theme.COLORS.GRAY_200};
  font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme })=> theme.FONT_SIZE.XSM}px;
`;

