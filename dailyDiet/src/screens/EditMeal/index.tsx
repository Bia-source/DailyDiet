import { Header } from "@components/Header";
import * as S from "./style";
import { ButtonBack } from "@components/ButtonBack";
import { IMeal } from "@utils/interface";

export function EditMeal(meal: IMeal) {
    return (
        <>
            <S.Container type={meal.isDiet}>
                <S.Div>
                    <ButtonBack type="NEUTRAL" />
                    <S.Title>
                        Editar Refeição
                    </S.Title>
                </S.Div>
            </S.Container>

            <S.Container2>

                
            </S.Container2>
        </>
    )
}