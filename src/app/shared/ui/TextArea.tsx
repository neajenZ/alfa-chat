import styled from "styled-components";
import {ChangeEvent, ReactElement, ReactNode} from "react";
import {Send} from "@icons";

interface IProps {
    value: string,
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
    placeholder: string
}

type IPropsPartial = Partial<IProps>

export const TextArea = (
    { placeholder = 'Напишите сообщение...', value, onChange }: IPropsPartial
) => {

    return (
        <InputBody rows={4} value={value} onChange={onChange} placeholder={placeholder}/>
    )
}

const InputBody = styled.textarea`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    resize: vertical;
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    border-radius: 10px;
    padding: 20px;
    color: ${({theme}) => theme.colors.text};
    background-color: transparent;
    &::placeholder {
        color: ${({theme}) => theme.colors.textSecondary};
    }
`