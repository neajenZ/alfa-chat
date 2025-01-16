import styled from "styled-components";
import {Flex} from "@ui";
import {List, UserList} from "@icons";
import {Link} from "react-router-dom";

export const CompanyLinks = () => {
    return (
        <Flex direction={'column'} gap={'20px'}>
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
        </Flex>
    )
}

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
`