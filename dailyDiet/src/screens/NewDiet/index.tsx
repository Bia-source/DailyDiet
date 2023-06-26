import { ButtonBack } from "@components/ButtonBack";
import * as S from "./style";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { Button } from "@components/Button";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { maskDate, maskHours } from "@utils/masks";
import { IMeal } from "@utils/interface";
import { newMeal } from "@storage/MealStorage/newMeal";

export function NewDiet() {
    const [option, setOption] = useState('');
    const navigator = useNavigation();
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');

    const [nameMeal, setNameMeal] = useState('');
    const [descriptionMeal, setDescriptionMeal] = useState('');
    const [isDietMeal, setIsDietMeal] = useState<boolean>(false);

    const maskedDate = maskDate(date, setDate);
    const maskedHours = maskHours(hours, setHours);

    async function regiterStorage() {
        await newMeal({
            name: nameMeal, 
            description: descriptionMeal,
            date: date,
            hour: hours,
            isDiet: isDietMeal
        });
        navigator.navigate('feedback', { isDiet: isDietMeal });
    }

    return (
        <>
            <S.Container>
                <S.Div>
                    <ButtonBack type="NEUTRAL" />
                    <S.Title>
                        Nova refeição
                    </S.Title>
                </S.Div>
            </S.Container>

            <S.Container2>
                <S.TitleInput>
                    Nome
                </S.TitleInput>
                <S.Input
                    multiline
                    onSubmitEditing={() => { setNameMeal }}
                    returnKeyType="default"
                    typeInput="NAME"
                    onChangeText={setNameMeal}
                />
                <Separator distance={20} />

                <S.TitleInput>
                    Descrição
                </S.TitleInput>
                <S.Input
                    multiline
                    onSubmitEditing={() => { setDescriptionMeal }}
                    returnKeyType="default"
                    typeInput="DESCRIPTION"
                    onChangeText={setDescriptionMeal}
                />

                <Separator distance={20} />
                <S.DivDate>
                    <S.DivColumn>
                        <S.TitleInput>
                            Data
                        </S.TitleInput>

                        <S.Input
                            onSubmitEditing={() => { }}
                            returnKeyType="default"
                            typeInput="DATE"
                            placeholderTextColor={"#ffffff"}
                            {...maskedDate}
                        />
                    </S.DivColumn>

                    <SeparatorVertical distance={20} />
                    <S.DivColumn>
                        <S.TitleInput>
                            Hora
                        </S.TitleInput>
                        <S.Input
                            onSubmitEditing={() => { }}
                            returnKeyType="default"
                            typeInput="DATE"
                            {...maskedHours}
                        />
                    </S.DivColumn>
                </S.DivDate>

                <Separator distance={30} />
                <S.TitleInput>
                    Está dentro da dieta?
                </S.TitleInput>
                <Separator distance={10} />
                <S.DivDate>
                    <Button
                        isActive={isDietMeal}
                        type={isDietMeal ? "GREEN-DARK" : "SECONDARY"}
                        size="SM"
                        text="Sim"
                        onPress={() => { setIsDietMeal(true) }}
                        iconPerson={<S.Status typeButtonNewDiet />}
                    />
                    <SeparatorVertical distance={20} />
                    <Button
                        isActive={!isDietMeal}
                        type={!isDietMeal ? "RED-DARK" : "SECONDARY"}
                        size="SM"
                        text="Não"
                        onPress={() => { setIsDietMeal(false) }}
                        iconPerson={<S.Status />}
                    />
                </S.DivDate>
                <Separator distance={160} />
                <Button
                    type="PRIMARY"
                    size="LG"
                    text="Cadastrar refeição"
                    onPress={() => {regiterStorage()}}
                />
            </S.Container2>
        </>
    )
}