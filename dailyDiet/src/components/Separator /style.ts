import styled from "styled-components/native";

export type SeparatorProps = {
    distance: number;
}

export const Container = styled.View<SeparatorProps>`
  margin-top: ${({ distance })=> distance}px;
`

export const ContainerSeparatorVertical = styled.View<SeparatorProps>`
  margin-right: ${({ distance })=> distance}px;
`