import styled from "styled-components";
import {ChangeEvent, ReactElement, ReactNode, useState} from "react";
import {Close, Copy, Delete, Share} from "@icons";
import {Flex} from "@ui";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import { ShareWithPeople } from '../ShareWithPeople/ShareWithPeople.tsx'
import {DeleteSelectedModal} from "../DeleteSelectedModal/DeleteSelectedModal.tsx";

export const InputModeEdit = observer(() => {
    const [isShareModal, setShareModal] = useState(false)
    const [isDeleteModal, setDeleteModal] = useState(false)
    const { selectedMessages, changeMode } = useChatRoomStore()

    return (
        <Body>
            <button onClick={() => changeMode('default')}>
                <Close/>
            </button>
            <p>Выбрано {selectedMessages.length === 1 ? '1 сообщение' : selectedMessages.length < 5 && selectedMessages.length > 1 ? `${selectedMessages.length} сообщения` : `${selectedMessages.length} сообщений`}</p>
            <RightActions>
                <button onClick={() => setShareModal(true)}><Share /></button>
                <button><Copy /></button>
                <button onClick={() => setDeleteModal(true)}><Delete/></button>
            </RightActions>
            { isShareModal && <ShareWithPeople onClose={() => setShareModal(false)} /> }
            { isDeleteModal && <DeleteSelectedModal onClose={() => setDeleteModal(false)} /> }
        </Body>
    )
})

const RightActions = styled(Flex)`
    align-items: center;
    gap: 10px;
    margin-left: auto;
`

const Body = styled.div`
    width: 100%;
    border: none;
    background: ${({theme}) => theme.colors.background};
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
`