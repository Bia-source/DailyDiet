import { HeaderStatics } from "@components/HeaderStatics";
import * as S from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { CardPercentage } from "@components/CardPercentage";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { useCallback, useState } from "react";
import { PercentageType } from "@components/CardPercentage/style";
import { getIsDietMealStorage } from "@storage/MealStorage/getIsDietMeal";
import { IMeal } from "@utils/interface";

type DataType = {
    isDietMeals: number,
    isNotDietMeals: number,
    numberAll: number
 }

export function Statics() {
    const [status, setStatus] = useState<PercentageType>('NEGATIVE');
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
      console.log(data);
      setData(data);
    }

    return (
        <S.HeaderContainer color="NEGATIVE">
            <S.Container>
                <HeaderStatics onPress={goBack} type={status} />
                <CardPercentage type={status} />

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