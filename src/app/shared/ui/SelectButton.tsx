import styled from "styled-components";

interface IProps {
    isActive: boolean
}

export const SelectButton = ({ isActive = true }: IProps) => {
    return (
        <Body isActive={isActive}>

        </Body>
    )
}

const Body = styled.div<IProps>`
    min-width: 24px;
    height: 24px;
    position: relative;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border: ${({ theme, isActive }) => isActive ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.borderColor}`};

    &::before {
        content: "";
        top: 50%;
        left: 50%;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        background-color: ${({ theme, isActive }) => isActive ? theme.colors.primary : 'transparent'};
    }
`