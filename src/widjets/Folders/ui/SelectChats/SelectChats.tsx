import {Avatar, ChatTag, Divider, Flex, Input} from "@ui";
import {Delete, Search} from "@icons";
import styled from "styled-components";
import {CheckBox} from "../../../../app/shared/ui/Checkbox.tsx";

export const SelectChats = () => {

    return (
        <Flex direction={'column'} margin={'20px 0 0 0'}>
            <Input isMessage={false} bordered={true} leftButtons={<Search />} />

            <Divider />

            <Flex direction={'column'} gap={'10px'}>
                <ReplyItem>
                    <Flex align={'center'} gap={'10px'}>
                        <Avatar><img src="/user_avatar.png" alt=""/></Avatar>
                        <Flex direction={'column'} align={'flex-start'} gap={'8px'}>
                            <p>Omid Sohrabil</p>
                            <Flex align={'stretch'} gap={'9px'}>
                                <ChatTag>WhatsApp</ChatTag>
                                <ChatTag>@Gamgaltr</ChatTag>
                            </Flex>
                        </Flex>
                    </Flex>

                    <button>
                        <CheckBox isActive={true}/>
                    </button>
                </ReplyItem>
            </Flex>
        </Flex>
    )
}

const ReplyItem = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
    
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 600;
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        
    }
`
