import { ButtonBack } from "@components/ButtonBack";
import * as S from "./style";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Separator } from "@components/Separator ";
import { Button } from "@components/Button";
import pencil from "@assets/pencil.png";
import trash from "@assets/trash.png";
import { ModalContent } from "@components/ModalContent";
import { deleteMeal } from "@storage/MealStorage/deleteMeal";
import { IMeal } from "@utils/interface";
import { getMealById } from "@storage/MealStorage/getMealById";

type RouteParams = {
    mealDetail: {
        id: string;
        name: string;
        description: string;
        date: string;
        hour: string;
        isDiet: boolean;
    }
}

export function Details() {
    const [modalVisable, setModalVisable] = useState<boolean>(false);
    const navigator = useNavigation();
    const route = useRoute();
    const { mealDetail } = route.params as RouteParams;
    const { name, description, date, hour, isDiet, id } = mealDetail;
    const [mealUpdate, setMealUpdate] = useState<IMeal | any>();
    
    function goEdit(){
        navigator.navigate('editMeal', { meal: mealDetail });
    }
    
    async function deleteMealTrash(){
        await deleteMeal(mealUpdate?.id);
        setModalVisable(false);
        navigator.navigate('home');
    }

    async function getMeal(){
       const getMeal = await getMealById(id);
       setMealUpdate(getMeal)
    }
    useFocusEffect(useCallback(()=> {
       getMeal();
    }, []))

    return (
        <>
            <S.Container type={mealUpdate?.isDiet || isDiet}>
                <S.Div>
                    <ButtonBack type="NEUTRAL" />
                    <S.Title>
                        Refeição
                    </S.Title>
                </S.Div>
            </S.Container>

            <S.Container2>
                <S.MealName>
                    {mealUpdate?.name || name}
                </S.MealName>

                <Separator distance={5} />

                <S.MealDescription>
                    {mealUpdate?.description || description}
                </S.MealDescription>

                <Separator distance={25} />

                <S.Subtitle>
                    Date e hora
                </S.Subtitle>

                <Separator distance={5} />

                <S.MealDate>
                    {mealUpdate?.date || date} às {mealUpdate?.hour || hour}
                </S.MealDate>

                <Separator distance={25} />

                <S.MealIsDietView>
                    <S.Status type={mealUpdate?.isDiet || isDiet} />
                    {mealUpdate?.isDiet || isDiet ?
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
                    text='Editar refeição'
                    onPress={() => goEdit()}
                />

                <Separator distance={10} />
                <Button
                    type='WHITE'
                    size='LG'
                    iconPerson={<S.IconEdit source={trash} />}
                    text='Excluir refeição'
                    onPress={()=> setModalVisable(true)}
                />

                {modalVisable &&
                    <ModalContent visable={modalVisable} onPress={deleteMealTrash} closed={()=> setModalVisable(false)}/>
                }
                
            </S.Container2>
        </>
    )
}