import {HTMLAttributes, ReactElement, ReactNode} from "react";
import styled from "styled-components";
import {size} from "@styles/size.ts";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
    text: string,
    variant?: 'default' | 'danger' | 'menu',
    size?: 'small' | 'large',
    color?: 'default' | string,
    leftIcon?: ReactNode | ReactElement,
    rightIcon?: ReactNode | ReactElement
}

export const Button = ({text, leftIcon, rightIcon, color, ...props}: IProps) => {
    return (
        <ButtonBody color={color} {...props}>
            {leftIcon}
            {text}
            {rightIcon}
        </ButtonBody>
    )
}

const ButtonBody = styled.button<{ color?: string | 'default' ,variant?: 'danger' | 'default' | 'menu', size?: 'small' | 'large' }>`
    background-color: ${({ theme, variant = 'default' }) => variant === 'menu' ? 'transparent' : variant === 'danger' ? theme.colors.backgroundBlock : theme.colors.primary};
    border-radius: 10px;
    color: ${({ theme, variant = 'default', color = 'default' }) => color !== 'default' ? color : variant === 'menu' ? theme.colors.text : variant === 'danger' ? '#E16070' : theme.colors.background};
    font-size: ${({ size = 'large' }) => size === 'large' ? '16' : '14'}px;
    padding: ${({ size = 'large', variant = 'default' }) => variant === 'menu' ? '22px 10px' : size === 'large' ? '12px 0' : '10px 26px'};
    font-weight: 600;
    width: ${({ size = 'large' }) => size === 'large' ? '100%' : 'auto'};

    display: flex;
    align-items: center;
    justify-content: ${({ variant = 'default' }) => variant === 'menu' ? 'flex-start' : 'center'};
    gap: 10px;
    
    &:hover {
        ${({ variant = 'default', theme }) => variant === 'menu' ? (
            `background-color: ${theme.colors.backgroundBlock};`
        ) : 'initial'}
    }


    @media (${size.notebook}) {
        font-size: 14px;
    }
`