import {LeftSide} from "@ui";
import styled from "styled-components";
import {SearchChatPanel} from "@features/SearchChatPanel";
import {SharedSettingsChats} from "@features/SharedSettingsChats";
import {ChatsList} from "@features/ChatsList";
import {ChatsFolderTabs} from "@features/ChatsFolderTabs";

export const ChatsLeftSide = () => {
    return (
        <LeftSide>
            <header>
                <h5>Сообщения</h5>
            </header>
            <Top>
                <SearchChatPanel />
                <SharedSettingsChats />
            </Top>
            <ChatsFolderTabs tabs={ [
                { label: "Все чаты", count: 6 },
                { label: "Работа", count: 3 },
                { label: "Друзья", count: 3 },
                { label: "Коллеги", count: 2 },
                { label: "Неважно", count: 1 },
                { label: "Дополнительно", count: 4 },
            ]} />
            <ChatsList />
        </LeftSide>
    )
}


const Top = styled.div`
    display: flex;
    align-items: stretch;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
`