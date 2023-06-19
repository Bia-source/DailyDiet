import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as S from "./style";
import { ButtonBack } from "@components/ButtonBack";
import { useNavigation } from "@react-navigation/native";

type HeaderStaticsProps = TouchableOpacityProps & {
    type: S.IconBackColor;
}

export function HeaderStatics({ type, ...rest }: HeaderStaticsProps) {
    return (
        <S.Container>
            <S.ButtonHeader {...rest}>
                <ButtonBack type={type}/>
            </S.ButtonHeader>
        </S.Container>
    )
}