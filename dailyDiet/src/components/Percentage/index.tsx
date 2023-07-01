import * as S from "./style";

type PropsPercentage = {
    percentage?: string;
}

export function Percentage({percentage="0"}: PropsPercentage){
    
    return(
        <S.Container>
            <S.Title>
               {percentage}%
            </S.Title>
  
            <S.SubTitle>
                das refeições dentro da dieta
            </S.SubTitle>
        </S.Container>
    )
}