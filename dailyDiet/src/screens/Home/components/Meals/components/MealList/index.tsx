import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";

type MealListProps = TouchableOpacityProps & {
    time: string;
    title: string;
    status: boolean;
}

export function MealList({ time, title, status, ...rest }: MealListProps) {
    return (
        <S.Container>
            <S.Meal {...rest}>
                <S.teste>
                    <S.Time>
                        {time}
                    </S.Time>
                    <S.LineVertical> | </S.LineVertical>
                    <S.Title>
                        {title}
                    </S.Title>
                </S.teste>

                <S.Status type={status} />
            </S.Meal>
        </S.Container>
    )
}