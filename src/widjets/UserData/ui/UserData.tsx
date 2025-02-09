import {Avatar, Button, Divider, Flex, SubTitleSide} from "@ui";
import {Chat2, Edit, Lock, Logout, Notification} from "@icons";
import styled from "styled-components";
import {Folder2} from "../../../app/shared/icons/Folder2.tsx";
import {useNavigate} from "react-router-dom";
import {size} from "@styles/size.ts";

export const UserData = () => {
    const navigate = useNavigate()

    return (
        <>
            <Divider />

            <Flex gap={'10px'} align={'center'}>
                <Avatar width={60} height={60}>
                    <img src="/user_avatar.png" alt=""/>
                </Avatar>
                <UserLeft>
                    <h4>Артур Нуртас</h4>
                    <span>Администратор</span>
                </UserLeft>
                <EditButton onClick={() => navigate(`${window.location.pathname}/user`)}>
                    <Edit />
                </EditButton>
            </Flex>

            <Divider />

            <SubTitleSide>Ваши сохраненные ответы</SubTitleSide>

            <Flex direction={'column'} gap={'10px'}>
                <Button onClick={() => navigate(`${window.location.pathname}/notifications`)} text={'Уведомление'} leftIcon={<Notification />} variant={'menu'} />
                <Button onClick={() => navigate(`${window.location.pathname}/privacy`)} text={'Конфиденциальность'} leftIcon={<Lock />} variant={'menu'} />
                <Button onClick={() => navigate(`${window.location.pathname}/chats`)} text={'Чат'} leftIcon={<Chat2 />} variant={'menu'} />
                <Button text={'Папки с чатами'} leftIcon={<Folder2 />} variant={'menu'} />
                <Button text={'Выйти из аккаунта'} leftIcon={<Logout />} variant={'menu'} color={'#E16070'} />
            </Flex>
        </>
    )
}

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`

const EditButton = styled.button`
    margin-left: auto;
`

const UserLeft = styled(Flex)`
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    
    h4 {
        color: ${({ theme }) => theme.colors.text};
        font-size: 20px;
        font-weight: 500;
    }

    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 16px;
        font-weight: 500;
    }

    @media (${size.notebook}) {
        gap: 2px;
        
        h4 {
            font-size: 17px;
        }
        
        span {
            font-size: 14px;
        }
    }
`