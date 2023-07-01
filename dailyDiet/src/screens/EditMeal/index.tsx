import { Header } from "@components/Header";
import * as S from "./style";
import { ButtonBack } from "@components/ButtonBack";
import { IMeal, RouteParams } from "@utils/interface";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { maskDate, maskHours } from "@utils/masks";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { Button } from "@components/Button";
import { updateMealStorage } from "@storage/MealStorage/updateMeal";

export function EditMeal() {

    const navigator = useNavigation();
    const route = useRoute();
    const { meal } = route.params as RouteParams;
    const { name, description, date, hour, isDiet, id } = meal;

    const [dateUpdate, setDateUpdate] = useState('');
    const [hours, setHours] = useState('');

    const [nameMeal, setNameMeal] = useState('');
    const [descriptionMeal, setDescriptionMeal] = useState('');
    const [isDietMeal, setIsDietMeal] = useState<boolean>(false);

    const maskedDate = maskDate(date, setDateUpdate);
    const maskedHours = maskHours(hour, setHours);

    useEffect(()=> {
       autocomplete()
    },[]);

    function autocomplete(){
        setIsDietMeal(isDiet);
        setNameMeal(name);
        setDescriptionMeal(description);
        setHours(hour);
        setDateUpdate(date);
    }
    
    async function saveEdit(){
        await updateMealStorage({id: id, name: nameMeal, description: descriptionMeal, isDiet: isDietMeal, hour: hours, date: dateUpdate});
        navigator.goBack();
    }

    return (
        <>
            <S.Container type={isDiet}>
                <S.Div>
                    <ButtonBack type="NEUTRAL" />
                    <S.Title>
                        Editar Refeição
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
                    value={nameMeal}
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
                    value={descriptionMeal}
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
                    text="Salvar alterações"
                    onPress={() => saveEdit()}
                />

            </S.Container2>
        </>
    )
}