import { Button } from "@components/Button";
import * as S from "./style";
import { Header } from "@components/Header";
import { CardPercentage } from "@components/CardPercentage";
import { Separator } from "@components/Separator ";
import { Meals } from "./components/Meals";
import { useNavigation } from "@react-navigation/native";
import { PercentageType } from "@components/CardPercentage/style";
import { useState } from "react";

export function Home() {
    const navigator = useNavigation();
    const [status, setStatus] = useState<PercentageType>('POSITIVE');

    function goStatics(){
       navigator.navigate("statics");
    }
    return (
        <S.Container>
            <Header />
            <Separator distance={33} />
            <CardPercentage showIconBack={true} onPress={goStatics} type={status} />
            <Separator distance={40} />
            <Meals/>
        </S.Container>
    )
}