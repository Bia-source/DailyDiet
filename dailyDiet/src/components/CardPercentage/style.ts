import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

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

export const Icon = styled(ArrowUpRight).attrs<PercentageStyleProps>(({ theme, type })=> ({
    width: 24,
    height: 24,
    color: type === 'NEGATIVE' && theme.COLORS.RED_DARK || type === 'POSITIVE' && theme.COLORS.GREEN_DARK
}))`
   margin-left: 98%;
`;

