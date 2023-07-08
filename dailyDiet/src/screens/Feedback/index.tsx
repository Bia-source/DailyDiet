import { Separator } from '@components/Separator ';
import * as S from './style';
import iconGirl from "./assets/girl.png";
import iconBoy from "./assets/boy.png";
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useState } from 'react';

type RouteParams = {
    isDiet: boolean;
}

export function Feedback() {
    const navigator = useNavigation();
    const route = useRoute();
    const { isDiet } = route.params as RouteParams;
    const [isLoading, setIsLoanding] = useState<boolean>(true);

    function backHome() {
        navigator.navigate('home');
    }

    useEffect(() => {
        loading();
    }, []);

    function loading() {
        setTimeout(() => { setIsLoanding(false) }, 5000)
    }

    return (
        <S.Container>
            {isLoading ?
                <>
                    <LottieView
                        autoPlay
                        loop
                        style={{ width: 300, height: 300 }}
                        source={require('../../assets/lottiefile/food-animation.json')}
                    />
                </>
                :
                <>

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
                </>
            }
        </S.Container>
    )
}