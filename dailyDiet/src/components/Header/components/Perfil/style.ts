import { Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   flex: 0.5;
`;

export const ImagePerfil = styled(Image).attrs(({ theme })=> ({
    size: 40
}))`
   border: 2px;
   border-bottom-left-radius: 100px;
   border-top-right-radius: 100px;
   border-top-left-radius: 100px;
   border-bottom-right-radius: 100px;
   border-color: ${({ theme }) => theme.COLORS.GRAY_200};
   max-width: 60px;
   max-height: 60px;
`;