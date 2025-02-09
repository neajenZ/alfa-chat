import styled from "styled-components";
import {Flex} from "./Flex.tsx";
import {Close} from "@icons";
import {ReactElement, ReactNode} from "react";
import {size} from "@styles/size.ts";

interface IProps {
    title: string,
    onClose: () => void,
    children: ReactElement | ReactNode
}

export const Drawer = ({ onClose, title, children }: IProps) => {
    return (
        <Body>
            <Header justify={'space-between'}>
                <h5>{title}</h5>
                <button onClick={onClose}>
                    <Close/>
                </button>
            </Header>
            { children }
        </Body>
    )
}

const Body = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px 20px 0 20px;

    @media (${size.notebook}) {
        position: fixed;
        right: 0;
        top: 0;
        width: 300px;
        padding: 30px 10px;
    }
`

const Header = styled(Flex)`
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 30px;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
    h5 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 20px;
        font-weight: 600;
    }
`