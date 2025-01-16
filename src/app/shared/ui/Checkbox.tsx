import styled from "styled-components";
import {Accept} from "@icons";

interface IProps {
    isActive: boolean
}

export const CheckBox = ({ isActive }: IProps) => {

    return (
        <Body>
            {
                isActive && <Accept />
            }
        </Body>
    )
}

const Body = styled.div`
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`