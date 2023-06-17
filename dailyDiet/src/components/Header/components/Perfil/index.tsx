import * as S from "./style";
import fotoPerfil from "@assets/fotoPerfil.png";

export function Perfil(){
  return(
    <S.Container>
        <S.ImagePerfil
          source={fotoPerfil}
        />
    </S.Container>
  )
}