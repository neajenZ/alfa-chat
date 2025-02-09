import styled from "styled-components";
import {ChangeEvent, forwardRef, ReactElement, ReactNode} from "react";
import {Send} from "@icons";
import {size} from "@styles/size.ts";

interface IProps {
    leftButtons?: ReactNode | ReactElement
    rightButtons?: ReactNode | ReactElement,
    value?: string,
    bordered?: boolean,
    onSend?: (value: string) => void,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}


export const MessageInput = forwardRef<HTMLDivElement, IProps>(({ leftButtons = <></>, rightButtons = <></>, value, bordered = false, onSend, onChange }: IProps, ref) => (
    <Body ref={ref} border={bordered}>
        { leftButtons && (
            <LeftButton>{leftButtons}</LeftButton>
        ) }
        <Input type="text" value={value} onChange={onChange} placeholder={'Напишите сообщение...'}/>
        { !value && rightButtons }
        {
            value && <SendButton><Send /></SendButton>
        }
    </Body>
))

const SendButton = styled.button`
    font-size: 0;
    &:hover {
        opacity: 0.7;
    }
`

const LeftButton = styled.div`
    @media (${size.smallNotebook}) {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`

const Body = styled.div<{ border: boolean }>`
    width: 100%;
    border: ${({ border, theme }) => border ? `1px solid ${theme.colors.borderColor}` : 'none'};
    background: ${({theme}) => theme.colors.background};
    border-radius: 10px;
    padding: 15px 20px;
    display: flex;
    align-items: center;

    @media (${size.smallNotebook}) {
        padding: 10px 16px;
    }
`

const Input = styled.input`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    margin: 0 8px;
    color: ${({theme}) => theme.colors.text};
    
    &:placeholder {
        color: ${({theme}) => theme.colors.textSecondary};
    }

    @media (${size.smallNotebook}) {
        font-size: 14px;
    }
`