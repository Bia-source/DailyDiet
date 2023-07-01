import { HeaderStatics } from "@components/HeaderStatics";
import * as S from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CardPercentage } from "@components/CardPercentage";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { useCallback, useState } from "react";
import { getIsDietMealStorage } from "@storage/MealStorage/getIsDietMeal";
import { getPercentage } from "@storage/MealStorage/getPercentage";

type DataType = {
    isDietMeals: number,
    isNotDietMeals: number,
    numberAll: number
 }
type PercentageProps = {
    isDiet: boolean; 
    percentage: number;
} 

export function Statics() {
    const [isDiet, setIsDiet] = useState<boolean>(false);

    const navigator = useNavigation();

    const [ data, setData] = useState<DataType>();
   
    function goBack() {
        navigator.goBack();
    }

    useFocusEffect(useCallback(()=> {
        getData();
    },[]))
    
    async function getData(){
      const data = await getIsDietMealStorage();
      const{ isDiet } = await getPercentage()
      setData(data);
      setIsDiet(isDiet);
    }

    return (
        <S.HeaderContainer isDiet={isDiet}>
            <S.Container>
                <HeaderStatics onPress={goBack} type={isDiet ? 'POSITIVE' : !isDiet ? 'NEGATIVE' : 'NEUTRAL'} />
                <CardPercentage isDiet={isDiet} />

            </S.Container>

            <S.GeneralStatistics>
                <S.Text> Estatisticas gerais </S.Text>
                <Separator distance={20} />
                <S.Cards>
                    <S.TitleCard>
                        1
                    </S.TitleCard>
                    <S.SubTitleCard>
                        melhor sequencia de pratos dentro da dieta
                    </S.SubTitleCard>
                </S.Cards>
                <Separator distance={20} />

                <S.Cards>
                    <S.TitleCard>
                        {data?.numberAll}
                    </S.TitleCard>
                    <S.SubTitleCard>
                        refeições registradas
                    </S.SubTitleCard>
                </S.Cards>
                <Separator distance={20} />

                <S.Div>
                    <S.CardsSmall color="GREEN">
                        <S.TitleCard>
                           {data?.isDietMeals}
                        </S.TitleCard>
                        <S.SubTitleCard>
                            refeições dentro da dieta
                        </S.SubTitleCard>
                    </S.CardsSmall>

                    <SeparatorVertical distance={20} />

                    <S.CardsSmall color="RED">
                        <S.TitleCard>
                            {data?.isNotDietMeals}
                        </S.TitleCard>
                        <S.SubTitleCard>
                            refeições fora da dieta
                        </S.SubTitleCard>
                    </S.CardsSmall> 

                    
                </S.Div>
            </S.GeneralStatistics>
        </S.HeaderContainer>

    )
}