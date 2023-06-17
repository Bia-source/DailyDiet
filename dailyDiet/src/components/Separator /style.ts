import styled from "styled-components/native";

export type SeparatorProps = {
    distance: number;
}

export const Container = styled.View<SeparatorProps>`
  margin-top: ${({ distance })=> distance}px;
`