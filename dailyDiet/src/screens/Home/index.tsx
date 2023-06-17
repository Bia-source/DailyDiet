import { Button } from "@components/Button";
import * as S from "./style";
import { Header } from "@components/Header";
import { Percentage } from "@components/Percentage";
import { CardPercentage } from "@components/CardPercentage";
import { Separator } from "@components/Separator ";

export function Home() {
    return (
        <S.Container>
            <Header />
            <Separator distance={33} />
            <CardPercentage type="POSITIVE" />
            <Separator distance={40} />
            <Button
                type="PRIMARY"
                size="LG"
                text="Nova refeicão"
                icon="plus"
                onPress={() => { }}
            />
        </S.Container>
    )
}