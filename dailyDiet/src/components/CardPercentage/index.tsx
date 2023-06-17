import { Percentage } from "@components/Percentage";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";
import { ArrowUpRight } from "phosphor-react-native";
import { Separator } from "@components/Separator ";

type CardPercentageProps = TouchableOpacityProps & {
    type: S.PercentageType;
    nameIcon: string
}

export function CardPercentage({ nameIcon, type = 'POSITIVE', ...rest }: CardPercentageProps) {
    return (
        <S.Container
            type={type}
            {...rest}
        >
            <S.Icon name="arrow-up-right" type={type}/>
            <Percentage />
            <Separator distance={10}/>
        </S.Container>
    )
}