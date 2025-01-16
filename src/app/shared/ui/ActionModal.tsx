import styled from "styled-components";
import {ReactElement, ReactNode} from "react";

interface IProps {
    children: ReactNode | ReactElement,
    position?: 'bl' | 'tl',
    x?: number,
    y?: number
}

export const ActionModal = ({ children, position, x, y}: IProps) => {
    return (
        <Body position={position} left={x} top={y}>
            {children}
        </Body>
    )
}

const Body = styled.div<{ position?: 'bl' | 'tl', left?: number, top?: number }>`
    background-color: ${({theme}) => theme.colors.backgroundBlock};
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 2px;
    width: 250px;
    left: ${({ left }) => left ? `${left}px` : 'inherit'};
    top: ${({ position = 'tl', top }) => top ? `${top}px` : position === 'tl' ? '100%' : 'initial'};
    bottom: ${({ position = 'tl' }) => position === 'tl' ? 'initial' : '100%'};
    position: ${({ top }) => top ? 'fixed' : 'absolute'}; 
    z-index: 2;
    right: 0;
    
    filter: drop-shadow(0px 0px 15px #00000024);
    
    svg {
        min-width: 25px;
    }
`
