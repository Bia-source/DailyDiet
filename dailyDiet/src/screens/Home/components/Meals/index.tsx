import { Button } from "@components/Button";
import * as S from "./style";
import { Separator } from "@components/Separator ";
import { MealList } from "./components/MealList";
import { SectionList, Text } from "react-native";

type mealData = {
    time: string;
    title: string;
}
type mealProps = {
    date: string;
    data: mealData[];
}

export function Meals() {
    const datas: mealProps[] = [
        {
            date: "12.08.22",
            data: [
                { time: "20:00", title: "X-Tudo" },
                { time: "08:00", title: "Mingau" },
            ]
        },
        {
            date: "20.08.22",
            data: [
                { time: "10:45", title: "Bolo" },
                { time: "08:00", title: "Pão de queijo" },
            ]
        },
        {
            date: "30.08.22",
            data: [
                { time: "06:30", title: "Cereais" },
                { time: "08:00", title: "Salgadinho" },
            ]
        }
    ]
    return (
        <S.Container>
            <S.Title>
                Refeições
            </S.Title>
            <Separator distance={10} />
            <Button
                type="PRIMARY"
                size="LG"
                text="Nova refeicão"
                icon="plus"
                onPress={() => { }}
            />
            <Separator distance={10} />
            <SectionList
                sections={datas}
                keyExtractor={item => item.title}
                renderItem={({ item, index }) => (
                    <MealList
                        date={datas[index].date}
                        time={item.time}
                        title={item.title}
                    />
                )}
                renderSectionHeader={({ section: { date } }) => (
                    <>
                        <Separator distance={10}/>
                        <S.Date>
                            {date}
                        </S.Date>
                    </>
                )}
            />

        </S.Container>
    )
}