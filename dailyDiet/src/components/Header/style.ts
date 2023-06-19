import { View, Image } from "react-native";
import styled from "styled-components/native";

export type TypeAlignmentElement = 'PERFIL' | 'TITLE' | 'PERCENTAGE';
export type HeaderStylePercentage = 'POSITIVE' | 'NEGATIVE'
export type HeaderStyleProps = {
   type: TypeAlignmentElement;
   percentage?: HeaderStylePercentage;
}

export const Container = styled.View`
 width: 100%;
 flex-direction: row;
 justify-content: space-between;
`;    

export const LogoImage = styled.Image`
   width: 82px;
   height: 37px;
`;

export const PerfilImage = styled.Image`
     width:40px;
     height: 40px;
     border-radius: 20px;
     border-width: 2px;
     border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;



