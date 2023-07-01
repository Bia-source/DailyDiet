import { Percentage } from "@components/Percentage";
import * as S from "./style";
import { TouchableOpacityProps } from "react-native";
import { Separator } from "@components/Separator ";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { getPercentage } from "@storage/MealStorage/getPercentage";

type CardPercentageProps = TouchableOpacityProps & {
    showIconBack?: boolean;
    isDiet?: boolean;
}

export function CardPercentage({ showIconBack = false, ...rest }: CardPercentageProps) {
  
    const [percentageNumber, setPercentageNumber] = useState<string>();
    const [isDiet, setIsDiet] = useState<boolean>();

    useFocusEffect(useCallback(()=> {
        getData();
    },[]))
    
    async function getData(){
      const { percentage, isDiet } = await getPercentage()
      let maskedPercentage = percentage.toString().replace(".", ",");
      setPercentageNumber(maskedPercentage);
      setIsDiet(isDiet);
    }
    
    return (
        <S.Container
            isDiet={isDiet}
            {...rest}
        >
            { showIconBack && 
             <S.Icon name="arrow-up-right" isDiet={isDiet}/>
            }
            <Percentage percentage={percentageNumber}/>
            <Separator distance={10}/>
        </S.Container>
    )
}