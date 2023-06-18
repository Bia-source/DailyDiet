import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons"

export type PercentageType = 'POSITIVE' | 'NEGATIVE';
export type PercentageStyleProps = {
    type: PercentageType;
}

export const Container = styled(TouchableOpacity)<PercentageStyleProps>`
   width: 100%;
   justify-content: center;
   align-items: center;
   height: 104px;
   padding: 20px 16px 20px 16px;
   border-radius: 8px;
   background-color: ${({ theme, type })=> type === 'POSITIVE' && theme.COLORS.GREEN_LIGHT || type === 'NEGATIVE' && theme.COLORS.RED_LIGHT};
`;

export const Icon = styled(Feather).attrs<PercentageStyleProps>(({ theme, type })=> ({
    size: 24,
    color: type === 'NEGATIVE' && theme.COLORS.RED_DARK || type === 'POSITIVE' && theme.COLORS.GREEN_DARK
}))`
    width: 24px;
    height: 24px; 
    margin-left: 98%;
`;

