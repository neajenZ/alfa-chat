import styled from "styled-components";
import {Search} from "@icons";
import {size} from "@styles/size.ts";

export const SearchChatPanel = () => {
    return (
        <Body>
            <Search />
            <Input placeholder={'Поиск..'} />
        </Body>
    )
}

const Body = styled.div`
    position: relative;   
    width: 100%;
    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 15px;
    }

    @media (${size.notebook}) {
        svg {
            width: 16px;
            height: 16px;
        }
    }
`

const Input = styled.input`
    border: none;
    outline: none;
    background-color: ${({theme}) => theme.colors.backgroundBlock};
    font-size: 16px;
    font-weight: 500;
    padding: 15px 16px 15px 45px;
    border-radius: 10px;
    width: 100%;
    
    &::placeholder {
        color: ${({theme}) => theme.colors.textSecondary};
    }

    @media (${size.notebook}) {
        padding: 10px 12px 10px 40px;
        font-size: 15px;
        
        svg {
            width: 16px;
            height: 16px;
        }
    }
`
