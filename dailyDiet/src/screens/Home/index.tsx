import { Button } from "@components/Button";
import * as S from "./style";
import { Header } from "@components/Header";
import { CardPercentage } from "@components/CardPercentage";
import { Separator } from "@components/Separator ";
import { Meals } from "./components/Meals";
import { useNavigation } from "@react-navigation/native";

export function Home() {
    const navigator = useNavigation();

    function goStatics(){
       navigator.navigate("statics");
    }
    return (
        <S.Container>
            <Header />
            <Separator distance={33} />
            <CardPercentage showIconBack={true} onPress={goStatics} type="POSITIVE" />
            <Separator distance={40} />
            <Meals/>
        </S.Container>
    )
}