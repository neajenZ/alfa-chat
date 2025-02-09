import styled from "styled-components";
import {Avatar, ChatTag, ChatType, Flex} from "@ui";
import {Pin, SoundOff} from "@icons";
import {useEffect, useRef} from "react";
import {size} from "@styles/size.ts";
import {useLocation, useNavigate} from "react-router-dom";

interface IProps {
    chat: unknown;
    onCloseContext: () => void,
    onClick?: (val: unknown) => void,
    onContextMenu: (e: MouseEvent, chat: unknown) => void
}

export const ChatItem = ({ chat, onCloseContext, onClick, onContextMenu }: IProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        const handleRightClick = (e: MouseEvent) => {
            e.preventDefault()
            onContextMenu(e, chat)
        }
        const handleClick = (e: MouseEvent) => {
            e.preventDefault()
            onCloseContext()
        }

        if (containerRef.current) {
            containerRef.current.addEventListener('click', handleClick)
            containerRef.current.addEventListener('contextmenu', handleRightClick)
        }
        return () => {
            containerRef.current?.removeEventListener('click', handleClick)
            containerRef.current?.removeEventListener('contextmenu', handleRightClick)
        }
    }, []);

    return (
        <Container onClick={() => navigate(`${location.pathname}/${chat.id}`)} ref={containerRef}>
            <Avatar height={window.innerWidth <= 1120 ? 45 : 50} width={window.innerWidth <= 1120 ? 45 : 50}>
                <img src={'/user_avatar.png'} alt={''}/>
            </Avatar>
            <Content direction={'column'} gap={'4px'}>
                <Header>
                    <Flex align={'flex-start'} gap={'10px'}>
                        <Name>Barry Allen</Name>
                        {
                            window.innerWidth >= 1120 ? (
                                <ChatType>
                                    Работа
                                </ChatType>
                            ) : null
                        }
                    </Flex>

                    <HeadLeft align={'center'} gap={'10px'}>
                        {
                            window.innerWidth <= 1120 ? (
                                <ChatTypeSmallWidth>
                                    Работа
                                </ChatTypeSmallWidth>
                            ) : null
                        }

                        <SoundOff />
                        <Pin />
                        <Time>13.02.2002</Time>
                    </HeadLeft>
                </Header>
                <Message>Lorem ipsum huka motrete dabolu</Message>
                <Footer gap={'9px'} align={'stretch'}>
                    <ChatTag>Telegram</ChatTag>
                    <ChatTag>@Gamgaltr</ChatTag>
                </Footer>
            </Content>
        </Container>
    );
};

const ChatTypeSmallWidth = styled(ChatType)`
    margin-right: auto;
`

const HeadLeft = styled(Flex)`
    @media (${size.laptop}) {
        width: 100%;
    }
`

const Container = styled(Flex)`
  align-items: flex-start;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

const Content = styled(Flex)`
  margin-left: 10px;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
    align-items: center;
    gap: 10px;
  justify-content: space-between;
    
    @media (${size.laptop}) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: 6px;
    }
    
`;

const Name = styled.span`
    font-weight: 600;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
`;

const Time = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (${size.laptop}) {
        font-size: 13px;
    }
`;

const Message = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.textSecondary};
    white-space: nowrap; /* Текст в одну строку */
    overflow: hidden;    /* Скрыть текст, выходящий за пределы контейнера */
    text-overflow: ellipsis;
    width: 100%;
    
    @media (${size.laptop}) {
        font-size: 12px;
    }
`;

const Footer = styled(Flex)`
    margin-top: 4px;
`;
