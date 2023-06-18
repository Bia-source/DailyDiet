import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export type IconBackColor = 'NEGATIVE' | 'POSITIVE' | 'NEUTRAL';

type IconBackProps = {
    type: IconBackColor;
}

export const Container = styled.View`
  
`

export const ButtonHeader = styled(TouchableOpacity)`
   flex-direction: row;
`

export const IconBack = styled(MaterialIcons).attrs<IconBackProps>(({ theme, type })=> ({
   size: 24,
   color: type === 'NEGATIVE' && theme.COLORS.RED_DARK || 
   type === 'POSITIVE' && theme.COLORS.GREEN_DARK || 
   type === 'NEUTRAL' && theme.COLORS.GRAY_100
}))`
   
`