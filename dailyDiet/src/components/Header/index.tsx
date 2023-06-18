import * as S from "./style";
import logoImage from "@assets/Logo.png"
import fotoPerfil from "@assets/fotoPerfil.png";

export function Header() {
   return (
      <>
         <S.Container>
                   <S.LogoImage source={logoImage}/>
                  <S.PerfilImage source={fotoPerfil}/>
               </S.Container>
      </>

   )
}