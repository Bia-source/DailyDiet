import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as S from "./style";

type HeaderStaticsProps = TouchableOpacityProps & {
    type: S.IconBackColor;
}

export function HeaderStatics({ type, ...rest }: HeaderStaticsProps) {
    return (
        <S.Container>
            <S.ButtonHeader {...rest}>
                <S.IconBack name="arrow-back" type={type} />
            </S.ButtonHeader>
        </S.Container>
    )
}