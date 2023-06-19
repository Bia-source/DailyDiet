import { Separator } from '@components/Separator ';
import * as S from './style';
import imagemSuccess from "@assets/Illustration.png";
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export function Success() {
    const navigator = useNavigation();

    function backHome(){
        navigator.navigate('home');
    }

    return (
        <S.Container>
            <S.Title>
                Continue assim!
            </S.Title>
            <S.SubTitle> Você continua {""}
                <S.Bold>
                    dentro da dieta.{" "}
                </S.Bold>
                Muito bem!</S.SubTitle>
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