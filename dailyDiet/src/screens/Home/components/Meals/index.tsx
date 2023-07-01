import { Button } from "@components/Button";
import { Separator } from "@components/Separator ";
import { SectionList } from "react-native";
import { MealList } from "./components/MealList";
import * as S from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllMeals } from "@storage/MealStorage/getAllMeals";
import { IMeal } from "@utils/interface";
import { useCallback, useEffect, useState } from "react";
import { deleteMeal } from "@storage/MealStorage/deleteMeal";

type mealProps = {
    date: string;
    data: IMeal[];
}


// date: item.date,
//                 data: [{
//                     name: item.name,
//                     description: item.description,
//                     date: item.date,
//                     hour: item.hour,
//                     isDiet: item.isDiet
//                 }]


export function Meals() {
    const navigator = useNavigation();

    const [datas, setDatas] = useState<mealProps[]>([]);

    async function fetchGetAllMeals() {
        const data = await getAllMeals();
        const newData: mealProps[] = [];
        data.map(item => {
            newData.push({
                date: item.date,
                data: [{
                    name: item.name,
                    description: item.description,
                    date: item.date,
                    hour: item.hour,
                    isDiet: item.isDiet
                }]
            });
        });
        setDatas(newData);
    }

    useFocusEffect(useCallback(() => {
        fetchGetAllMeals();
    }, []))

    function goNewDiet() {
        navigator.navigate('newdiet');
    }

    function goDetailsMeal(meal: IMeal){
        console.log(meal);
        navigator.navigate('details', { meal });
    }

    return (
        <S.Container>
            <S.Title>
                Refeições
            </S.Title>
            <Separator distance={10} />
            <Button
                type="PRIMARY"
                size="LG"
                text="Nova refeição"
                icon="plus"
                onPress={goNewDiet}
            />
            <Separator distance={10} />
            <SectionList
                nestedScrollEnabled
                sections={datas}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <MealList
                        time={item.hour}
                        title={item.name}
                        status={item.isDiet}
                        onPress={()=> goDetailsMeal(item)}
                    />
                )}
                renderSectionHeader={({ section: { date } }) => (
                    <>
                        <Separator distance={10} />
                        <S.Date>
                            {date}
                        </S.Date>
                    </>
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={(
                    <></>
                )}
            />

        </S.Container>
    )
}
