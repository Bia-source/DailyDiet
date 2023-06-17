import { Percentage } from "@components/Percentage";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type CardPercentageProps = TouchableOpacityProps & {
    type: S.PercentageType;
}

export function CardPercentage({ type, ...rest }: CardPercentageProps) {
    return (
        <S.Container
        type={type}
            {...rest}
        >
            <S.Icon type={type}/>
            <Percentage />
        </S.Container>
    )
}