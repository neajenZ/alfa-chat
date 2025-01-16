import styled from "styled-components";

export const LeftSide = styled.aside`
    width: 30%;
    height: 100%;
    background: ${({theme}) => theme.colors.background};
    padding: 40px 20px;
    margin-left: 20px;
    
    header {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    header h5 {
        font-size: 20px;
        font-weight: 600;
        color: ${({theme}) => theme.colors.text};
    }
`