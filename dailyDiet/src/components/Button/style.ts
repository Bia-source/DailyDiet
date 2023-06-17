
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export type ButtonColorStyleProps = 'PRIMARY' | 'SECONDARY';
export type ButtonSizeStyleProps = 'SM' | 'MD' | 'LG';
export type ButtonColorTextProps = 'DARK' | 'LIGTH';


type Props = {
  type?: ButtonColorStyleProps;
  size?: ButtonSizeStyleProps;
  colorText?: ButtonColorTextProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200
      : type === 'SECONDARY' ? theme.COLORS.GRAY_600
        : theme.COLORS.GRAY_200};
  min-width: ${({ size }) =>
    size === 'SM' ? 25
      : size === 'MD' ? 65
        : size === 'LG' ? 100 : 100}%;
  max-width: ${({ size }) =>
    size === 'SM' ? 25
      : size === 'MD' ? 65
        : size === 'LG' ? 100 : 100}px;;

  max-height: 50px;
  min-height: 50px;
  border-radius: 6px;
  justify-content: center;
 
  padding: 16px 24px 16px 24px;
  flex-direction: row;
`;

export const TextButton = styled(Text)<Props>`
   color: ${({ type, theme }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT
    : type === 'SECONDARY' ? theme.COLORS.GRAY_200
      : theme.COLORS.RED_DARK};
   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const IconButton = styled(AntDesign).attrs<Props>(({ theme, type })=> ({
   size: 18,
   color: type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT
   : type === 'SECONDARY' ? theme.COLORS.GRAY_200
     : theme.COLORS.RED_DARK
}))`
 margin-right: 10px;
`;