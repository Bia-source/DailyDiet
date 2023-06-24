import { ButtonBack } from "@components/ButtonBack";
import * as S from "./style";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { Button } from "@components/Button";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { maskDate, maskHours } from "@utils/masks";

export function NewDiet() {
    const [option, setOption] = useState('');
    const navigator = useNavigation();
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');

    const maskedDate = maskDate(date, setDate);
    const maskedHours = maskHours(hours, setHours);


    function addFeedback() {
        let status = option === 'Yes' ? true : false;
        navigator.navigate('feedback', { isDiet: status });
    }


    return (
        <>
            <S.Container>
                <S.Div>
                    <ButtonBack type="NEUTRAL"/>
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
                    onSubmitEditing={() => { }}
                    returnKeyType="default"
                    typeInput="NAME" />
                <Separator distance={20} />

                <S.TitleInput>
                    Descrição
                </S.TitleInput>
                <S.Input
                    multiline
                    onSubmitEditing={() => { }}
                    returnKeyType="default"
                    typeInput="DESCRIPTION" />

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
                        isActive={(option === 'Yes')}
                        type={(option === 'Yes') ? "GREEN-DARK" : "SECONDARY"}
                        size="SM"
                        text="Sim"
                        onPress={() => { setOption('Yes') }}
                        iconPerson={<S.Status typeButtonNewDiet />}
                    />
                    <SeparatorVertical distance={20} />
                    <Button
                        isActive={option === 'No'}
                        type={option === 'No' ? "RED-DARK" : "SECONDARY"}
                        size="SM"
                        text="Não"
                        onPress={() => { setOption('No') }}
                        iconPerson={<S.Status />}
                    />
                </S.DivDate>
                <Separator distance={160} />
                <Button
                    type="PRIMARY"
                    size="LG"
                    text="Cadastrar refeição"
                    onPress={addFeedback}

                />
            </S.Container2>
        </>
    )
}