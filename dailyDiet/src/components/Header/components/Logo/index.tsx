import * as S from "./style";
import logoImage from "@assets/Logo.png"

export function Logo(){
    return(
        <S.Container>
            <S.LogoImage source={logoImage}/>
        </S.Container>
    )
}