import { HeaderStatics } from "@components/HeaderStatics";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";
import { CardPercentage } from "@components/CardPercentage";
import { Separator, SeparatorVertical } from "@components/Separator ";
import { useState } from "react";
import { PercentageType } from "@components/CardPercentage/style";

export function Statics() {
    const [status, setStatus] = useState<PercentageType>('NEGATIVE');
    const navigator = useNavigation();

    function goBack() {
        navigator.goBack();
    }

    return (
        <S.HeaderContainer color="NEGATIVE">
            <S.Container>
                <HeaderStatics onPress={goBack} type={status} />
                <CardPercentage type={status} />

            </S.Container>

            <S.GeneralStatistics>
                <S.Text> Estatisticas gerais </S.Text>
                <Separator distance={20} />
                <S.Cards>
                    <S.TitleCard>
                        4
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
                            32
                        </S.TitleCard>
                        <S.SubTitleCard>
                            refeições dentro da dieta
                        </S.SubTitleCard>
                    </S.CardsSmall>

                    <SeparatorVertical distance={20} />

                    <S.CardsSmall color="RED">
                        <S.TitleCard>
                            77
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