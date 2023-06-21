import { TouchableOpacity } from "react-native";
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