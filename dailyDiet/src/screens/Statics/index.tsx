import { HeaderStatics } from "@components/HeaderStatics";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";
import { CardPercentage } from "@components/CardPercentage";
import { Separator, SeparatorVertical } from "@components/Separator ";

export function Statics() {
    const navigator = useNavigation();

    function goBack() {
        navigator.goBack();
    }

    return (
        <S.HeaderContainer color="NEGATIVE">
            <S.Container>
                <HeaderStatics onPress={goBack} type="NEGATIVE" />
                <CardPercentage type="NEGATIVE" />

            </S.Container>

            <S.GeneralStatistics>
                <S.Text> Estatisticas gerais </S.Text>
                <Separator distance={20} />
                <S.Cards>
                    <S.TitleCard>
                        22
                    </S.TitleCard>
                    <S.SubTitleCard>
                        melhor sequencia de pratos dentro da dieta
                    </S.SubTitleCard>
                </S.Cards>
                <Separator distance={20} />

                <S.Cards>
                    <S.TitleCard>
                        109
                    </S.TitleCard>
                    <S.SubTitleCard>
                        refeições registradas
                    </S.SubTitleCard>
                </S.Cards>
                <Separator distance={20} />

                <S.Div>
                    <S.CardsSmall color="GREEN">
                        <S.TitleCard>
                            99
                        </S.TitleCard>
                        <S.SubTitleCard>
                            refeições dentro da dieta
                        </S.SubTitleCard>
                    </S.CardsSmall>

                    <SeparatorVertical distance={20} />

                    <S.CardsSmall color="RED">
                        <S.TitleCard>
                            10
                        </S.TitleCard>
                        <S.SubTitleCard>
                            refeições fora da dieta
                        </S.SubTitleCard>
                    </S.CardsSmall> 

                    
                </S.Div>
            </S.GeneralStatistics>
        </S.HeaderContainer>

    )
}