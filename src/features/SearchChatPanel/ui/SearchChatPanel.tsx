import styled from "styled-components";
import {Search} from "@icons";

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
`
