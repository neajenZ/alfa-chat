import {Avatar, ChatTag, Flex, Modal} from "@ui";
import {Close, Search, Smile} from "@icons";
import styled from "styled-components";
import {Input} from "../../../../app/shared/ui/Input.tsx";
import {CheckBox} from "../../../../app/shared/ui/Checkbox.tsx";
import {Emoji} from "@entities/Emoji";
import {MessageInput} from "@entities/Message";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {useState} from "react";
import {observer} from "mobx-react-lite";

interface IProps {
    onClose: () => void
}

export const ShareWithPeople = observer(({ onClose }: IProps) => {
    const [isEmojiModal, setEmojiModal] = useState(false)
    const { inputMessage, setMessage } = useChatRoomStore()
    return (
        <Modal>
            <Header>
                <h5>Переслать сообщение</h5>
                <Button onClick={onClose}>
                    <Close />
                </Button>
            </Header>

            <Input isMessage={false} leftButtons={<Search />} placeholder={'Поиск'} />

            <Flex margin={'20px 0 0 0'} direction={'column'} gap={'10px'}>
                <ChatTitle>Чаты</ChatTitle>
                <ChatItem>
                    <Avatar>
                        <img src="/user_avatar.png" alt=""/>
                    </Avatar>

                    <Flex direction={'column'} gap={'6px'}>
                        <h4>Omid Sohrabil</h4>
                        <Flex align={'stretch'} gap={'10px'}>
                            <ChatTag>
                                WhatsApp
                            </ChatTag>
                            <ChatTag>
                                @Gamgaltr
                            </ChatTag>
                        </Flex>
                    </Flex>
                    <CheckBoxWrapper>
                        <CheckBox isActive={true} />
                    </CheckBoxWrapper>
                </ChatItem>
                <ChatItem>
                    <Avatar>
                        <img src="/user_avatar.png" alt=""/>
                    </Avatar>

                    <Flex direction={'column'} gap={'6px'}>
                        <h4>Omid Sohrabil</h4>
                        <Flex align={'stretch'} gap={'10px'}>
                            <ChatTag>
                                WhatsApp
                            </ChatTag>
                            <ChatTag>
                                @Gamgaltr
                            </ChatTag>
                        </Flex>
                    </Flex>
                    <CheckBoxWrapper>
                        <CheckBox isActive={false} />
                    </CheckBoxWrapper>
                </ChatItem>
                <ChatItem>
                    <Avatar>
                        <img src="/user_avatar.png" alt=""/>
                    </Avatar>

                    <Flex direction={'column'} gap={'6px'}>
                        <h4>Omid Sohrabil</h4>
                        <Flex align={'stretch'} gap={'10px'}>
                            <ChatTag>
                                WhatsApp
                            </ChatTag>
                            <ChatTag>
                                @Gamgaltr
                            </ChatTag>
                        </Flex>
                    </Flex>
                    <CheckBoxWrapper>
                        <CheckBox isActive={true} />
                    </CheckBoxWrapper>
                </ChatItem>
            </Flex>

            <MessageInput
                bordered
                value={inputMessage}
                onChange={(e) => setMessage(e.target.value)}
                leftButtons={(
                    <SmileContainer>
                        <button onClick={() => setEmojiModal(!isEmojiModal)}><Smile/></button>
                        { isEmojiModal && <Emoji /> }
                    </SmileContainer>
                )}
            />
        </Modal>
    )
})

const SmileContainer = styled.div`
    position: relative;
`

const CheckBoxWrapper = styled.div`
    margin-left: auto;
`

const Header = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    h5 {
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
`

const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    display: flex;
    align-items: center;
    justify-content: center;
`

const ChatItem = styled(Flex)`
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    
    h4 {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
    }
`

const ChatTitle = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};
`