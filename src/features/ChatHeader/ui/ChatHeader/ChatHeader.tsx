import styled from "styled-components";
import {Avatar, ChatTag, Flex} from "@ui";
import {ChatHeaderSettings} from "../ChatHeaderSettings/ChatHeaderSettings.tsx";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {size} from "@styles/size.ts";

export const ChatHeader = observer(() => {
    const { handleOpenDrawers } = useChatRoomStore()
    return (
        <Body>
            <Flex justify={'space-between'}>
                <Flex align={'center'} gap={'10px'}>
                    <Avatar height={window.innerWidth <= 768 ? 40 : 50} width={window.innerWidth <= 768 ? 40 : 50}>
                        <img src="/user_avatar.png" alt=""/>
                    </Avatar>
                    <UserData direction={'column'} gap={'4px'} align={'flex-start'}>
                        <Name onClick={() => handleOpenDrawers('user', true)}>Maghzum Ayash</Name>
                        <LastSeen>был(а) вчера в 23:42</LastSeen>
                    </UserData>
                </Flex>
                <Flex align={'center'} gap={'20px'}>
                    <Flex align={'stretch'} gap={'9px'}>
                        <ChatTag>VK</ChatTag>
                        <ChatTag>@Gamgaltr</ChatTag>
                    </Flex>
                    <ChatHeaderSettings />
                </Flex>
            </Flex>
        </Body>
    )
});

const UserData = styled(Flex)`
    text-align: left;
    @media (${size.smallNotebook}) {
        gap: 2px;
    }
`

const Name = styled.h4`
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    color: ${({theme}) => theme.colors.text};

    &:hover {
        opacity: 0.8;
    }

    @media (${size.laptop}) {
        font-size: 15px;
    }

    @media (${size.smallNotebook}) {
        font-size: 14px;
    }
`

const LastSeen = styled.span`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 500;

    @media (${size.smallNotebook}) {
        font-size: 12px;
    }
`

const Body = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    padding: 20px;
`

