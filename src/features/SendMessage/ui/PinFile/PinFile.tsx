import styled from "styled-components";
import {File, Picture, PinFile} from "@icons";
import {ActionButton, ActionModal} from "@ui";
import {ChangeEvent, useRef} from "react";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import { SendPhotoModal } from "../SendPhotoModal/SendPhotoModal.tsx";
import { SendFileModal } from "../SendFileModal/SendFileModal.tsx";
import {useOutsideClick} from "@hooks/useOutsideClick.ts";

export const PinFiles = observer(() => {
    const { setInputImages, inputImages, inputFiles, setInputFiles } = useChatRoomStore()
    const inputRef = useRef<HTMLInputElement | null>(null)
    const inputFilesRef = useRef<HTMLInputElement | null>(null)
    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClick(false)

    const handleUploadPhoto = () => {
        inputRef.current?.click()
    }

    const uploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setInputImages(e.target.files)
        }
    }

    const handleUploadFiles = () => {
        inputFilesRef.current?.click()
    }

    const uploadFiles = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setInputFiles(e.target.files)
        }
    }

    return (
        <Body ref={ref}>
            <button onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <PinFile />
            </button>
            {
                isComponentVisible && (
                    <ActionModal position={'bl'}>
                        <ActionButton onClick={handleUploadPhoto}>
                            <Picture />
                            Фото или видео
                            <input
                                ref={inputRef}
                                type="file"
                                onChange={uploadPhoto}
                                multiple
                                style={{ visibility: 'hidden', width: 0, height: 0 }}
                                accept="image/png, image/gif, image/jpeg, image/jpg, image/webp, image/avif"
                            />
                        </ActionButton>
                        <ActionButton onClick={handleUploadFiles}>
                            <File/>
                            Файл
                            <input
                                ref={inputFilesRef}
                                type="file"
                                onChange={uploadFiles}
                                multiple
                                style={{visibility: 'hidden', width: 0, height: 0}}
                                accept="*"
                            />
                        </ActionButton>
                    </ActionModal>
                )
            }
            {inputImages && <SendPhotoModal />}
            {inputFiles && <SendFileModal />}
        </Body>
    )
})

const Body = styled.div`
    position: relative;
`