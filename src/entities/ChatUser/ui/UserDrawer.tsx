import styled from "styled-components";
import {Avatar, Drawer, Flex} from "@ui";
import {IUserDrawer} from "@providers/ChatRoomProvider/model.ts";

interface IProps {
    onClose: () => void
}

const media = [...Array(10).keys()]

export const UserDrawer = ({ onClose }: IProps) => {
    return (
        <Drawer onClose={onClose} title={'Пользователь'}>
            <Flex align={'center'} gap={'10px'}>
                <Avatar><img src="/user_avatar.png" alt=""/></Avatar>
                <Flex gap={'4px'} align={'flex-start'} direction={'column'}>
                    <Name>Barry Allen</Name>
                    <LastSeen>был(а) вчера в 23:42
                    </LastSeen>
                </Flex>
            </Flex>

            <Divider />

            <Flex direction={'column'} gap={'20px'}>
                <ReferItem justify={'space-between'} align={'center'}>
                    <span>Откуда:</span>
                    <p>VK</p>
                </ReferItem>
                <ReferItem justify={'space-between'} align={'center'}>
                    <span>Куда:</span>
                    <p>@galysom</p>
                </ReferItem>
            </Flex>

            <Divider />

            <UserContributionTabs>
                <ContributionTab isActive>Медиа</ContributionTab>
                <ContributionTab isActive={false}>Файлы</ContributionTab>
            </UserContributionTabs>

            <GridContainer>
                {
                    media.map((i) => (
                        <img key={i} src="/contr.png" alt=""/>
                    ))
                }
            </GridContainer>
        </Drawer>
    )
}

const Name = styled.h4`
    font-weight: 600;
    font-size: 16px;
    color: ${({theme}) => theme.colors.text};
`

const LastSeen = styled.span`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 500;
`

const Divider = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 19px;
    background-color: #FAFAFA;
    margin: 30px 0;
`

const ReferItem = styled(Flex)`
    padding-bottom: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.backgroundBlock};
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
    
    p {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
`

const UserContributionTabs = styled(Flex)`
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border-radius: 30px;
    padding: 4px;
    margin-bottom: 20px;
`

const ContributionTab = styled.button<{ isActive: boolean }>`
    width: 50%;
    text-align: center;
    border-radius: 43px;
    padding: 10px 0;
    background-color: ${({ isActive, theme }) => isActive ? theme.colors.background : 'transparent'};
    font-size: 16px;
    font-weight: 500;
    color: ${({ isActive, theme }) => isActive ? theme.colors.primary : '#A3ABB2'};
    filter: ${({ isActive, theme }) => isActive ? 'drop-shadow(5px 5px 6px #0000000D)' : 'none'};
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 9px;
    flex-grow: 1;    
    overflow-y: auto;
    img {
        width: 100%;
    }
`