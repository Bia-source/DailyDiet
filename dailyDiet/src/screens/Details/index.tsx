import { ButtonBack } from "@components/ButtonBack";
import * as S from "./style";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback } from "react";
import { Separator } from "@components/Separator ";
import { Button } from "@components/Button";
import pencil from "@assets/pencil.png";
import trash from "@assets/trash.png";

type RouteParams = {
    meal: {
        name: string;
        description: string;
        date: string;
        hour: string;
        isDiet: boolean;
    }
}

export function Details() {
    const navigator = useNavigation();
    const route = useRoute();
    const { meal } = route.params as RouteParams;
    const { name, description, date, hour, isDiet } = meal;

    return (
        <>
            <S.Container type={isDiet}>
                <S.Div>
                    <ButtonBack type="NEUTRAL" />
                    <S.Title>
                        Refeição
                    </S.Title>
                </S.Div>
            </S.Container>

            <S.Container2>
                <S.MealName>
                    {name}
                </S.MealName>

                <Separator distance={5} />

                <S.MealDescription>
                    {description}
                </S.MealDescription>

                <Separator distance={25} />

                <S.Subtitle>
                    Date e hora
                </S.Subtitle>

                <Separator distance={5} />

                <S.MealDate>
                    {date} às {hour}
                </S.MealDate>

                <Separator distance={25} />

                <S.MealIsDietView>
                    <S.Status type={isDiet} />
                    {isDiet ?
                        <S.MealIsDietText> dentro da dieta</S.MealIsDietText>
                        :
                        <S.MealIsDietText> fora da dieta </S.MealIsDietText>
                    }
                </S.MealIsDietView>

                <Separator distance={345} />
                <Button
                    type='PRIMARY'
                    size='LG'
                    iconPerson={<S.IconEdit source={pencil} />}
                    text='Ir para a pagina inicial'
                    onPress={() => { }}
                />

                <Separator distance={10} />
                <Button
                    type='WHITE'
                    size='LG'
                    iconPerson={<S.IconEdit source={trash} />}
                    text='Excluir refeição'
                    onPress={() => { }}
                />
            </S.Container2>
        </>
    )
}