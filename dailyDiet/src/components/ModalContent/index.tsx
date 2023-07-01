import { useState } from "react";
import { Modal } from "react-native";
import * as S from "./style";
import { Button } from "@components/Button";
import { Separator, SeparatorVertical } from "@components/Separator ";


type ModalProps = {
  visable: boolean;  
  closed: (statusVisable: boolean)=> void;
}

export function ModalContent({visable, closed}: ModalProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visable}
        >
            <S.Container>
                <S.ModalView>
                    <S.Title> Deseja realmente excluir o registro da refeição? </S.Title>
                    <Separator distance={30}/>
                    <S.ModalAction>
                        <Button
                            type='WHITE'
                            size='SM'
                            text='Cancelar'
                            onPress={() => closed(false)}
                        />
                        <SeparatorVertical distance={10}/>
                        <Button
                            type='PRIMARY'
                            size='SM'
                            text='Sim, excluir'
                            onPress={() => { }}
                        />
                    </S.ModalAction>
                </S.ModalView>

            </S.Container>

        </Modal>
    )
}