import { Separator } from '@components/Separator ';
import * as S from './style';
import imagemSuccess from "@assets/Illustration.png";
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import { useEffect } from 'react';

type RouteParams = {
    isDiet: boolean;
}

export function Success() {
    const navigator = useNavigation();
    const route = useRoute();
    const { isDiet } = route.params as RouteParams;
    useEffect(()=>{
        console.log(isDiet)
    }, [])
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

            <Image
                source={imagemSuccess}
            />
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