import { Button } from "@components/Button";
import * as S from "./style";
import { Header } from "@components/Header";
import { CardPercentage } from "@components/CardPercentage";
import { Separator } from "@components/Separator ";
import { Meals } from "./components/Meals";

export function Home() {
    return (
        <S.Container>
            <Header />
            <Separator distance={33} />
            <CardPercentage type="POSITIVE" />
            <Separator distance={40} />
            <Meals/>
        </S.Container>
    )
}