import { Container, ContainerSeparatorVertical, SeparatorProps } from "./style";

export function Separator({ distance }: SeparatorProps){
    return(
        <Container distance={distance}/>
    )
}

export function SeparatorVertical({ distance }: SeparatorProps){
    return(
        <ContainerSeparatorVertical distance={distance}/>
    )
}