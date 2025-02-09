import styled from "styled-components";
import {Flex} from "@ui";
import {List, UserList} from "@icons";
import {Link} from "react-router-dom";
import {size} from "@styles/size.ts";

export const CompanyLinks = () => {
    return (
        <Wrapper direction={'column'} gap={'20px'}>
            <Item as={Link} to={`${window.location.pathname}/groups`}>
                <List />
                <Flex direction={'column'} gap={'8px'} align={'flex-start'}>
                    <span>Список Групп</span>
                    <p>Посмотретие список всех групп которые прикрепленые к вашей компании</p>
                </Flex>
            </Item>
            <Item as={Link} to={`${window.location.pathname}/members`}>
                <UserList />
                <Flex direction={'column'} gap={'8px'} align={'flex-start'}>
                    <span>Список пользователей</span>
                    <p>Посмотретие список всех пользователей которые прикрепленые к вашей компании</p>
                </Flex>
            </Item>
            <Item as={Link} to={`${window.location.pathname}/socials`}>
                <UserList />
                <Flex direction={'column'} gap={'8px'} align={'flex-start'}>
                    <span>Список привязанных соц.сетей</span>
                    <p>Посмотретие привязанные соц.сети к вашей компании</p>
                </Flex>
            </Item>
        </Wrapper>
    )
}

const Wrapper = styled(Flex)`
    @media (${size.notebook}) {
        gap: 10px;
    }

    @media (max-width: 800px) {
        flex-direction: row;
        gap: 2px;
    }

    @media (${size.phone}) {
        flex-direction: column;
    }
`

const Item = styled(Flex)`
    background-color: ${({ theme }) => theme.colors.background};
    padding: 10px;
    text-decoration: none;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    
    span {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }

    p {
        font-size: 14px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.textSecondary};
    }
    
    svg {
        min-width: 24px;
    }

    @media (${size.notebook}) {
        span {
            font-size: 15px;
        }
        
        p {
            font-size: 12px;
        }
        
        div {
            gap: 2px;
        }
    }

    @media (max-width: 800px) {
        width: 100%;
        padding: 5px;
        span {
            font-size: 13px;
        }
        p {
            display: none;
        }
    }

    @media (${size.phone}) {
        min-height: 40px;
    }
`