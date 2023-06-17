import * as S from "./style";
import { Text } from "react-native";

type MealListProps = {
    date: string;
    time: string;
    title: string;
    type?: string;
}

export function MealList({ date, time, title, type }: MealListProps) {
    return (
        <S.Container>

            <S.Meal>
                <S.teste>
                    <S.Time>
                        {time}
                    </S.Time>
                    <S.LineVertical> | </S.LineVertical>
                    <S.Title>
                        {title}
                    </S.Title>
                </S.teste>

                <S.Status type="NEGATIVE"/>
            </S.Meal>
        </S.Container>
    )
}