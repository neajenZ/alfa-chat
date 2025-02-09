import React from "react";
import styled from "styled-components";
import {Message} from "@entities/Message";
import {observer} from "mobx-react-lite";
import withModeEdit from "@features/ChatMessages/ui/withModeEdit.tsx";
import {IMessage} from "@entities/Message/model.ts";
import {size} from "@styles/size.ts";

interface MessageListProps {
    messages: unknown[];
}

const MyComponentWithStore = withModeEdit(Message);


const messages: IMessage[] = [
    {
        id: "1",
        text: "Приветствую, я молодой банан.",
        time: "10:03 AM",
        type: "text",
        isOutgoing: false,
    },
    {
        id: "2",
        text: "Приветствую, расскажите о себе и о вашей цели",
        time: "10:03 AM",
        type: "text",
        isOutgoing: true,
    },
    {
        id: "3",
        text: "Я молодой веб-дизайнер, хочу стать директором Яндекса",
        time: "10:03 AM",
        type: "text",
        isOutgoing: false,
    },
    {
        id: "666",
        text: "Я молодой веб-дизайнер, хочу стать директором Яндекса",
        replyMessage: 'Help!!!',
        time: "10:03 AM",
        type: "reply",
        isOutgoing: false,
    },
    {
        id: "4",
        text: "Окей, желаю удачи",
        time: "10:03 AM",
        type: "text",
        isOutgoing: true,
    },
    {
        id: "5",
        time: "10:03 AM",
        type: "voice",
        isOutgoing: true,
        audioUrl: "/sample-audio.mp3",
        duration: "0:46",
    },
];

export const ChatMessages: React.FC<MessageListProps> = observer(() => {

    return (
        <Container>
            {messages.map((message) => (
                <MyComponentWithStore message={message} />
            ))}
        </Container>
    );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  height: calc(100vh - 153px); // Отнимаем размер шапки и ввода
  overflow-y: auto;
    width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
    @media (${size.smallNotebook}) {
        height: calc(100vh - 134px); // Отнимаем размер шапки и ввода
    }
    
`;
