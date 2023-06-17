import { Button } from "@components/Button";
import * as S from "./style";
import { Logo } from "@components/Header/components/Logo";
import { Header } from "@components/Header";

export function Home(){
    return(
        <S.Container>
            <Header/>
            {/* <S.Text>
                OLÁ MUNDO
            </S.Text> */}
            <Button  
               type="PRIMARY"
               size="LG"
               text="Nova refeicão"
               icon="plus"
               onPress={()=> {}}
            />
        </S.Container>
    )
}