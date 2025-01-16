import {Flex, Modal} from "@ui";
import styled from "styled-components";
import {Close, Delete, Smile} from "@icons";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {useMemo, useState} from "react";
import {MessageInput} from "@entities/Message";
import {Emoji} from "@entities/Emoji";

export const SendPhotoModal = observer(() => {
    const { inputImages, setInputImages, inputMessage, setMessage } = useChatRoomStore()
    const [isEmojiModal, setEmojiModal] = useState(false)

    const urlImages = useMemo(() => {
        return inputImages && Array.from(inputImages).map((i) => URL.createObjectURL(new Blob([i])))
    }, [inputImages])

    return (
        <Modal>
            <Header justify={'space-between'} align={'center'}>
                <h5>Отправить {inputImages!.length} фото</h5>
                <button onClick={() => setInputImages(null)}><Close/></button>
            </Header>
            <GridContainer>
                {
                    urlImages && urlImages.map((i) => (
                        <SelectedImage key={i}>
                            <img src={i} alt=""/>
                            <button><Delete /></button>
                        </SelectedImage>
                    ))
                }
            </GridContainer>
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

const SelectedImage = styled.div`
    position: relative;
    font-size: 0;
    button {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.6);
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
    img {
        width: 100%;
        height: 100%;
    }
`

const SmileContainer = styled.div`
    position: relative;
`

const Header = styled(Flex)`
    width: 100%;
    h5 {
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
    
    button {
        width: 40px;
        border-radius: 10px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.colors.backgroundBlock};
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(auto-fill, 1fr);
    gap: 10px;
    margin: 20px 0;
    img {
        width: 100%;
    }
`