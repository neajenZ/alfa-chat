import styled from "styled-components";

export const ActionButton = styled.button<{ variant?: 'default' | 'danger' }>`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    padding: 13px 10px;
    color: ${({theme, variant}) => variant === 'danger' ? '#E16070' : theme.colors.text};
    font-size: 14px;
    font-weight: 500;
    
    &:hover {
        opacity: 0.8;
    }
`