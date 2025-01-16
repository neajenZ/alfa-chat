import styled from "styled-components";
import {ChangeEvent, ReactElement, ReactNode, useState} from "react";
import {Send} from "@icons";

interface IProps {
    leftButtons: ReactNode | ReactElement
    rightButtons: ReactNode | ReactElement,
    value: string,
    bordered: boolean,
    onSend: (value?: string) => void,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    isMessage: boolean,
    placeholder: string,
    visible: boolean,
    labelInto: boolean
}

type IPropsPartial = Partial<IProps>

type IPropsFinal =
    | (IPropsPartial & { labelInto: true; value: string; onChange: (e: ChangeEvent<HTMLInputElement>) => void; })
    | (IPropsPartial & { labelInto?: false; });

export const Input = (
    { placeholder = 'Напишите сообщение...', visible = true, labelInto, leftButtons = <></>, rightButtons = <></>, value, bordered = false, isMessage = true, onSend, onChange }: IPropsFinal
) => {
    const [isFocused, setFocused] = useState(false)
    return (
        <Body background={!isMessage} labelInto={labelInto} border={bordered}>
            {leftButtons}
            {
                labelInto && <Label isFocused={isFocused || value.length > 0}>{placeholder}</Label>
            }
            <InputBody
                type={visible ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={!labelInto ? placeholder : ''}
                labelInto={labelInto}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
            {rightButtons}
            {
                isMessage && value && !labelInto && <SendButton onClick={() => onSend && onSend(value)}><Send/></SendButton>
            }
        </Body>
    )
}

const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  top: ${({ isFocused }) => (isFocused ? "6px" : "18px")};
  left: 20px;
  font-size: ${({ isFocused }) => (isFocused ? "12px" : "16px")};
  color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 500;
  transition: all 0.2s ease-in-out;
  pointer-events: none; /* Чтобы label не перехватывал клики */
`;

const SendButton = styled.button`
    font-size: 0;
    &:hover {
        opacity: 0.7;
    }
`

const Body = styled.div<{ labelInto?: boolean, background: boolean, border: boolean }>`
    width: 100%;
    border: ${({ border, theme }) => border ? `1px solid ${theme.colors.borderColor}` : 'none'};
    background: ${({theme, background}) => background ? theme.colors.backgroundBlock : theme.colors.background};
    border-radius: 10px;
    padding: ${({labelInto}) => labelInto ? '20px 20px 15px 20px' : '15px 20px'};
    display: flex;
    align-items: center;
    position: relative;
`

const InputBody = styled.input<{ labelInto?: boolean }>`
    width: 100%;
    font-size: 16px;
    font-weight: 500;
    outline: none;
    border: none;
    margin: ${({labelInto}) => labelInto ? '0' : '0 8px'};
    padding: ${({labelInto}) => labelInto ? '0' : 'initial'};
    color: ${({theme}) => theme.colors.text};
    background-color: transparent;
    &::placeholder {
        color: ${({theme}) => theme.colors.textSecondary};
    }
`