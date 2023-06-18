import { HeaderStatics } from "@components/HeaderStatics";
import * as S from "./style";
import { useNavigation } from "@react-navigation/native";

export function Statics(){
    const navigator = useNavigation();

    function goBack(){
      navigator.goBack();
    }

    return(
        <S.Container>
            <HeaderStatics onPress={goBack} type="POSITIVE"/>
        </S.Container>
    )
}