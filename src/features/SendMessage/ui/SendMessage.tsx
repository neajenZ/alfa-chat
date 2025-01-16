import {observer} from "mobx-react-lite";
import styled from "styled-components";

import {MessageInput} from "@entities/Message";
import {Emoji} from "@entities/Emoji";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {ReplyMini, Smile} from "@icons";
import {Flex} from "@ui";

import {PinFiles} from "../ui/PinFile/PinFile.tsx";
import {InputModeEdit} from "../ui/InputModeEdit/InputModeEdit.tsx";
import {useOutsideClick} from "@hooks/useOutsideClick.ts";

export const SendMessage = observer(() => {
    const { inputMessage, setMessage, handleOpenDrawers, mode } = useChatRoomStore()
    const { ref, setIsComponentVisible, isComponentVisible } = useOutsideClick(false)

    if (mode === 'edit') {
        return <InputModeEdit />
    }

    return (
        <>
            <MessageInput
                ref={ref}
                onChange={(e) => setMessage(e.target.value)}
                value={inputMessage}
                leftButtons={(
                    <EmojiContainer>
                        <button onClick={() => setIsComponentVisible(!isComponentVisible)} style={{width: '22px', height: '22px'}}>
                            <Smile />
                        </button>
                        { isComponentVisible && <Emoji onSearchSticker={() => handleOpenDrawers('sticker', true)} onSearchGif={() => handleOpenDrawers('gif', true)} /> }
                    </EmojiContainer>
                )}
                rightButtons={(
                    <Flex align={'center'} gap={'10px'}>
                        <Button onClick={() => handleOpenDrawers('reply', true)} align={'center'} gap={'4px'}>
                            <ReplyMini />
                            <span>Ваши ответы</span>
                        </Button>
                        <PinFiles />
                    </Flex>
                )}
            />
        </>
    )
})

const EmojiContainer = styled.div`
    position: relative;
`


const Button = styled(Flex)`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 45px;
    padding: 5px 10px;
    cursor: pointer;
    
    span {
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        color: ${({ theme }) => theme.colors.primary};
    }
`