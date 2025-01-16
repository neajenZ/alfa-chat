import {Actions, Choice, Delete, NoSound} from "@icons";
import styled from "styled-components";
import {ActionButton, ActionModal} from "@ui";
import {useState} from "react";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {useOutsideClick} from "@hooks/useOutsideClick.ts";

export const ChatHeaderSettings = observer(() => {
    const { ref, setIsComponentVisible, isComponentVisible } = useOutsideClick(false)
    const { changeMode } = useChatRoomStore()

    return (
        <Body ref={ref}>
            <button onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <Actions/>
            </button>
            {
                isComponentVisible && (
                    <ActionModal>
                        <ActionButton onClick={() => changeMode('edit')}>
                            <Choice />
                            Выбрать сообщения
                        </ActionButton>
                        <ActionButton>
                            <NoSound />
                            Убрать звук
                        </ActionButton>
                        <ActionButton variant={'danger'}>
                            <Delete />
                            Удалить чат
                        </ActionButton>
                    </ActionModal>
                )
            }
        </Body>
    )
})

const Body = styled.div`
    position: relative;
`