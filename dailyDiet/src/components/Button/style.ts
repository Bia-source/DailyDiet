
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

export type ButtonColorStyleProps = 'PRIMARY' | 'SECONDARY' | 'GREEN-DARK' | 'RED-DARK';
export type ButtonSizeStyleProps = 'SM' | 'MD' | 'LG';
export type ButtonColorTextProps = 'DARK' | 'LIGTH';

type Props = {
  type?: ButtonColorStyleProps;
  size?: ButtonSizeStyleProps;
  colorText?: ButtonColorTextProps;
  isActive?: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  background-color: ${({ theme, type, isActive }) =>
    type === 'PRIMARY' ? theme.COLORS.GRAY_200
      : type === 'SECONDARY' ? theme.COLORS.GRAY_600
        : type === 'GREEN-DARK' && isActive ? theme.COLORS.GREEN_LIGHT
        : type === 'RED-DARK' && isActive ? theme.COLORS.RED_LIGHT
        : theme.COLORS.GRAY_200};
  min-width: ${({ size }) =>
    size === 'SM' ? 47
      : size === 'MD' ? 65
        : size === 'LG' ? 100 : 100}%;
  max-width: ${({ size }) =>
    size === 'SM' ? 47
      : size === 'MD' ? 65
        : size === 'LG' ? 100 : 100}px;;

  max-height: 50px;
  min-height: 50px;
  border-radius: 6px;
  border-width: ${({ isActive })=> isActive && 1}px;
  border-color: ${({ theme, isActive, type })=> isActive && type === 'GREEN-DARK' ? theme.COLORS.GREEN_DARK 
  : isActive && type === 'RED-DARK' ? theme.COLORS.RED_DARK
  : null
};
  justify-content: center;
  padding: 0 24px 16px 24px;
  flex-direction: row;
  align-items: center;
`;

export const DivIconPerson = styled.View`
   margin-top: 18px;
   margin-right: 8px;
`

export const TextButton = styled(Text)<Props>`
   color: ${({ type, theme }) => type === 'PRIMARY' ? theme.COLORS.WHITE
    : type === 'SECONDARY' ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_100};
   font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
   margin-top: 16px;
`;

export const IconButton = styled(AntDesign).attrs<Props>(({ theme, type })=> ({
   size: 18,
   color: type === 'PRIMARY' ? theme.COLORS.WHITE
   : type === 'SECONDARY' ? theme.COLORS.GRAY_100
     : theme.COLORS.RED_DARK
}))`
 margin-right: 10px;
 margin-top: 17px;
`;

