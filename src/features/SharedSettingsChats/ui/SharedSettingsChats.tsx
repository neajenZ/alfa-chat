import styled from "styled-components";
import {Book, Folder, Message, Minus, Write} from "@icons";
import {ActionButton, ActionModal} from "@ui";
import {useSearchParams} from "react-router-dom";
import {useOutsideClick} from "@hooks/useOutsideClick.ts";
import {size} from "@styles/size.ts";

export const SharedSettingsChats = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClick(false)
    const [_, setSearchParams] = useSearchParams()

    return (
        <Body ref={ref}>
            <Button isActive={isComponentVisible} onClick={() => setIsComponentVisible(!isComponentVisible)}>
                <Write />
            </Button>
            {
                isComponentVisible && (
                    <ActionModal>
                        <ActionButton onClick={() => setSearchParams({ window: 'folders' })}>
                            <Folder />
                            Создать папку
                        </ActionButton>
                        <ActionButton onClick={() => setSearchParams({ window: 'save_replies' })}>
                            <Message />
                            Сохранённый ответ
                        </ActionButton>
                        <ActionButton onClick={() => setSearchParams({ window: 'not_here' })}>
                            <Minus />
                            Сообщение "Нет на месте"
                        </ActionButton>
                        <ActionButton onClick={() => setSearchParams({ window: 'first_message' })}>
                            <Book />
                            Приветственное сообщение
                        </ActionButton>
                    </ActionModal>
                )
            }
        </Body>
    )
}

const Body = styled.div`
    position: relative;
`

const Button = styled.button<{ isActive: boolean }>`
    width: 50px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    
    path {
        fill: ${({ theme, isActive }) => isActive ? theme.colors.primary : ''};
    }
    
    &:hover {
        opacity: 0.9;
    }

    @media (${size.notebook}) {
        height: 38px;
        width: 38px;
        
        svg {
            width: 18px;
            height: 18px;
        }
    }
`