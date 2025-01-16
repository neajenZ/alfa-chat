import { Avatar, Flex } from "@ui"
import styled from "styled-components"
import {Chat, Members, Settings} from "@icons";
import {useLocation, useNavigate} from "react-router-dom";

interface ISidebarLink {
    isActive: boolean
}

export const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <Body>
            <Flex align="center" height={'100%'} direction="column">
                <Avatar>
                    <img src="/logotype.png" alt=""/>
                </Avatar>
                <Divider />
                <Flex width={'100%'} align='center' direction={'column'}>
                    <SidebarLink onClick={() => navigate('/chat')} isActive={location.pathname === '/chat'}>
                        <Chat />
                        <span>Чат</span>
                    </SidebarLink>
                    <SidebarLink onClick={() => navigate('/company')} isActive={location.pathname === '/company'}>
                        <Members />
                        <span>Компания</span>
                    </SidebarLink>
                    <SidebarLink onClick={() => navigate('/settings')} isActive={location.pathname === '/settings'}>
                        <Settings />
                        <span>Настройки</span>
                    </SidebarLink>
                </Flex>
                <UserAvatar>
                    <img src="/logotype.png" alt=""/>
                </UserAvatar>
            </Flex>
        </Body>
    )
}

const Body = styled.div`
    background: ${(props) => props.theme.colors.background};
    width: 100px;
    height: 100%;
    padding: 40px 0;
`

const SidebarLink = styled(Flex)<ISidebarLink>`
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 14px 0;
    cursor: pointer;
    border-left: 3px solid ${({ theme, isActive }) => isActive ? theme.colors.primary : 'transparent'};
    background: ${({ theme, isActive }) => isActive ? theme.colors.primaryTransparent : 'transparent'};
    span {
        color: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.textSecondary};
    }

    path {
        stroke: ${({ theme, isActive }) => isActive ? theme.colors.primary : theme.colors.textSecondary};
    }
`

const UserAvatar = styled(Avatar)`
    margin-top: auto;
`

const Divider = styled.div`
    width: 50%;
    background: ${({theme}) => theme.colors.backgroundBlock};
    height: 1px;
    margin: 25px auto;
`
