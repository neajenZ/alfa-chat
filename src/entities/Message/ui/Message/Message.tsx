import React from "react";
import styled from "styled-components";
import {Audio, Avatar, Flex} from "@ui";
import {Sent} from "@icons";
import {IMessage} from "@entities/Message/model.ts";
import {size} from "@styles/size.ts";

interface IProps {
    message: IMessage;
}

export const Message = ({ message }: IProps) => {
    return (
        <MessageContainer isOutgoing={message.isOutgoing}>
            {
                !message.isOutgoing && <UserAvatar><img src="/user_avatar.png" alt=""/></UserAvatar>
            }
            <Bubble isOutgoing={message.isOutgoing}>
                {message.type === "text" ? (
                    <Text isOutgoing={message.isOutgoing}>{message.text}</Text>
                ) : message.type === 'voice' ? (
                    <VoiceContainer >
                        <Audio />
                    </VoiceContainer>
                ) : (
                    <ReplyContainer>
                        <ReplyMessage>
                            <span>Вы</span>
                            <Text isOutgoing={false}>Help us</Text>
                        </ReplyMessage>
                        <Text isOutgoing={message.isOutgoing}>{message.text}</Text>
                    </ReplyContainer>
                )}
                <Flex gap={'10px'} align={'flex-end'}>
                    <Time isOutgoing={message.isOutgoing}>{message.time}</Time>
                    {
                        message.isOutgoing && <Sent />
                    }
                </Flex>

            </Bubble>
        </MessageContainer>
    );
};

const ReplyContainer = styled(Flex)`
    align-items: flex-start;
    flex-direction: column;
`

const ReplyMessage = styled.div`
    background: #2B81C826;
    width: 100%;
    padding: 4px;
    border-radius: 4px 6px;
    border-left: 4px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 10px;
    
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
        font-weight: 500;
    }
    
    span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 14px;
        font-weight: 500;
    }
`

const UserAvatar = styled(Avatar)`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`

const MessageContainer = styled.div<{ isOutgoing: boolean }>`
  display: flex;
    align-items: flex-end;
  justify-content: ${(props) => (props.isOutgoing ? "flex-end" : "flex-start")};
`;

const Bubble = styled.div<{ isOutgoing: boolean }>`
  background-color: ${({ isOutgoing, theme }) => (isOutgoing ? theme.colors.primary : theme.colors.background)};
  color: ${(props) => (props.isOutgoing ? "#fff" : "#333")};
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 60%;
  word-wrap: break-word;
  position: relative;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  ${(props) =>
    props.isOutgoing
        ? `border-bottom-right-radius: 0px;`
        : `border-bottom-left-radius: 0px;`}

    @media (${size.smallNotebook}) {
        padding: 6px 10px;
    }
`;

const Text = styled.div<{ isOutgoing: boolean }>`
  font-size: 16px;
    font-weight: 500;
    color: ${({theme, isOutgoing}) => isOutgoing ? theme.colors.background : theme.colors.text};
    
    @media (${size.notebook}) {
        font-size: 15px;
    }

    @media (${size.smallNotebook}) {
        font-size: 13px;
    }
`;

const Time = styled.span<{ isOutgoing: boolean }>`
  font-size: 14px;
    font-weight: 500;
  color: ${({theme, isOutgoing}) => isOutgoing ? theme.colors.background : theme.colors.text};
  margin-top: 5px;

    @media (${size.smallNotebook}) {
        font-size: 12px;
    }
`;

const VoiceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
