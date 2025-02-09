import {createPortal} from "react-dom";
import styled from "styled-components";
import {ReactElement, ReactNode} from "react";
import {size} from "@styles/size.ts";

interface IProps {
    width?: number,
    children: ReactNode | ReactElement
}

export const Modal = ({ children, width = 500 }: IProps) => {

    return createPortal((
        <Background>
            <Body width={width}>
                { children }
            </Body>
        </Background>
    ), document.body)
}

const Body = styled.div<{ width: number }>`
    background: ${({ theme }) => theme.colors.background};
    padding: 20px;
    width: ${({ width }) => width}px;
    border-radius: 30px;
    
    @media (${size.phone}) {
        margin: 0 20px;
    }
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(1.4px);
`