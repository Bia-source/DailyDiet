import { Separator } from '@components/Separator ';
import * as S from './style';
import iconGirl from "@assets/girl.png";
import iconBoy from "@assets/boy.png";
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';

type RouteParams = {
    isDiet: boolean;
}

export function Feedback() {
    const navigator = useNavigation();
    const route = useRoute();
    const { isDiet } = route.params as RouteParams;

    function backHome() {
        navigator.navigate('home');
    }

    return (
        <S.Container>
            {isDiet ?
                <>
                    <S.Title isDiet>
                        Continue assim!
                    </S.Title>
                    <S.SubTitle> Você continua {""}
                        <S.Bold>
                            dentro da dieta.{" "}
                        </S.Bold>
                        Muito bem!</S.SubTitle>
                </>

                :
                <>
                    <S.Title>
                        Que pena!
                    </S.Title>
                    <S.SubTitle> Você {""}
                        <S.Bold>
                            saiu da dieta{" "}
                        </S.Bold>
                        dessa vez, mas continue se esforndo e não desista!
                    </S.SubTitle>

                </>

            }

            <Separator distance={50} />

            {isDiet ?
                <Image
                    source={iconGirl}
                />
                :
                <Image
                    source={iconBoy}
                />
            }
            <Separator distance={30} />
            <Button
                type='PRIMARY'
                size='MD'
                text='Ir para a pagina inicial'
                onPress={backHome}
            />
        </S.Container>
    )
}