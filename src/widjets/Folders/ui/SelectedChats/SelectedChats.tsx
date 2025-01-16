import {Avatar, Button, ChatTag, Flex} from "@ui";
import {Delete, Plus} from "@icons";
import styled from "styled-components";
import {observer} from "mobx-react-lite";
import {useFolderRoomStore} from "@widjets/Folders/providers/context.tsx";

export const SelectedChats = observer(() => {
    const { setSearchChat } = useFolderRoomStore()
    return (
        <Flex direction={'column'} gap={'10px'}>
            <BodyTitle>Выбранные чаты</BodyTitle>
            
            <Button
                leftIcon={<Plus variant={'black'} />}
                onClick={() => setSearchChat(true)}
                text={'Добавить чаты'}
                variant={'menu'}
            />

            <Flex direction={'column'} gap={'10px'}>
                <ReplyItem>
                    <Flex align={'center'} gap={'10px'}>
                        <Avatar><img src="/user_avatar.png" alt=""/></Avatar>
                        <Flex direction={'column'} align={'flex-start'} gap={'8px'}>
                            <p>Omid Sohrabil</p>
                            <Flex align={'stretch'} gap={'9px'}>
                                <ChatTag>WhatsApp</ChatTag>
                                <ChatTag>@Gamgaltr</ChatTag>
                            </Flex>
                        </Flex>
                    </Flex>

                    <button>
                        <Delete/>
                    </button>
                </ReplyItem>
            </Flex>
        </Flex>
    )
})

const ReplyItem = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 600;
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        
    }
`

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`