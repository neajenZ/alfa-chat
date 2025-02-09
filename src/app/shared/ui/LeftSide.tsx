import styled from "styled-components";
import {size} from "@styles/size.ts";

export const LeftSide = styled.aside<{ width?: string }>`
    width: 30%;
    height: 100%;
    background: ${({theme}) => theme.colors.background};
    padding: 40px 20px;
    margin-left: 20px;
    overflow-y: auto;
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
    
    @media (${size.notebook}) {
        padding: 30px 10px;
        margin-left: 10px;
    }

    @media (max-width: 872px) {
        min-width: 280px;
    }

    @media (${size.phone}) {
        width: 100%;
        margin-left: 0;
        border-left: 1px solid ${({theme}) => theme.colors.borderColor};
    }
`