import { TouchableOpacityProps } from "react-native";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

type ButtonBackProps = TouchableOpacityProps & {
    type: S.IconBackColor;
}

export function ButtonBack({ type, ...rest}: ButtonBackProps){
    const navigator = useNavigation();

    function goBack(){
        navigator.goBack();
    }
    
    return(
        <S.Container onPress={goBack} {...rest}>
            <S.IconBack name="arrow-back" type={type}/>
        </S.Container>
    )
}