import {useMemo, useState} from "react";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

import {Flex, Modal} from "@ui";
import {Close, Delete, Smile, ZIP} from "@icons";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {MessageInput} from "@entities/Message";
import {Emoji} from "@entities/Emoji";

import {readableFileSize} from "../../lib/readableFileSize.ts";

export const SendFileModal = observer(() => {
    const { inputFiles, setInputFiles, inputMessage, setMessage } = useChatRoomStore()
    const [isEmojiModal, setEmojiModal] = useState(false)

    const files = useMemo(() => {
        return inputFiles && Array.from(inputFiles).map((i) => i)
    }, [inputFiles])

    const getPictureFromBlob = (file: File) => URL.createObjectURL(new Blob([file]))

    return (
        <Modal>
            <Header justify={'space-between'} align={'center'}>
                <h5>Отправить {inputFiles!.length === 1 ? `${inputFiles?.length} Файл` : `${inputFiles?.length} Файла`}</h5>
                <button onClick={() => setInputFiles(null)}><Close/></button>
            </Header>
            <Flex direction={'column'} gap={'20px'} margin={'20px 0'}>
                {
                    files && files.map((i) => (
                        <SelectedImage key={i.name}>
                            <Left>
                                {
                                    i.type.includes('zip') ? <ZIP /> : <img src={getPictureFromBlob(i)} alt=""/>
                                }
                            </Left>
                            <Flex direction={'column'} gap={'6px'}>
                                <h4>{i.name}</h4>
                                <p>{readableFileSize(i.size)}</p>
                            </Flex>
                            <button><Delete /></button>
                        </SelectedImage>
                    ))
                }
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

const Left = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
    
    img {
        width: 100%;
        border-radius: 5px;
    }
`

const SelectedImage = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    
    button {
        margin-left: auto;

        svg {
            width: 17px;
            height: 17px;
        }
    }

    img {
        width: 100%;
        height: 100%;
    }
    
    h4 {
        font-size: 16px;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.text};
    }
    
    p {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textSecondary};
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