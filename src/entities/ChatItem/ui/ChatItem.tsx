import styled from "styled-components";
import {Avatar, ChatTag, ChatType, Flex} from "@ui";
import {Pin, SoundOff} from "@icons";
import {useEffect, useRef} from "react";

interface IProps {
    chat: unknown;
    onCloseContext: () => void,
    onContextMenu: (e: MouseEvent, chat: unknown) => void
}

export const ChatItem = ({ chat, onCloseContext, onContextMenu }: IProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null)

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
        <Container ref={containerRef}>
            <Avatar>
                <img src={'/user_avatar.png'} alt={''}/>
            </Avatar>
            <Content direction={'column'} gap={'4px'}>
                <Header>
                    <Flex align={'flex-start'} gap={'10px'}>
                        <Name>Barry Allen</Name>
                        <ChatType>
                            Работа
                        </ChatType>
                    </Flex>

                    <Flex align={'center'} gap={'10px'}>
                        <SoundOff />
                        <Pin />
                        <Time>13.02.2002</Time>
                    </Flex>
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
`;

const Message = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.textSecondary};
`;

const Footer = styled(Flex)`
    margin-top: 4px;
`;

const Platform = styled.span`
  font-size: 12px;
  color: #888;
`;
