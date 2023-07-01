import { Button } from "@components/Button";
import * as S from "./style";
import { Header } from "@components/Header";
import { CardPercentage } from "@components/CardPercentage";
import { Separator } from "@components/Separator ";
import { Meals } from "./components/Meals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { PercentageType } from "@components/CardPercentage/style";
import { useCallback, useEffect, useState } from "react";
import { getAllMeals } from "@storage/MealStorage/getAllMeals";

export function Home() {
    const navigator = useNavigation();
    const [status, setStatus] = useState<PercentageType>('NEGATIVE');

    useFocusEffect(useCallback(()=> {
         getAllMeals();
    }, []))


    function goStatics(){
       navigator.navigate("statics");
    }
    return (
        <S.Container>
            <Header /> 
            <Separator distance={33} />
            <CardPercentage showIconBack={true} onPress={goStatics}/>
            <Separator distance={40} />
            <Meals/>
        </S.Container>
    )
}