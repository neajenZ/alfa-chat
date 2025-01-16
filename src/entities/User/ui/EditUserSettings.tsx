import {Avatar, Button, Divider, Flex, Input} from "@ui";
import styled from "styled-components";
import {useState} from "react";
import {LeftArrow} from "@icons";
import {useNavigate} from "react-router-dom";

export const EditUserSettings = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    return (
        <Flex direction={'column'}>
            <UserAvatar>
                <Avatar width={100} height={100}>
                    <img src="/user_avatar.png" alt=""/>
                </Avatar>
                <p>Выбрать фотографию</p>
            </UserAvatar>

            <Flex direction={'column'} gap={'11px'}>
                <Input
                    bordered={true}
                    labelInto={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Имя'}
                />
                <Input
                    bordered={true}
                    labelInto={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Фамилия'}
                />
            </Flex>

            <Divider />

            <Flex direction={'column'} gap={'11px'}>
                <Input
                    bordered={true}
                    labelInto={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Номер телефона'}
                />
                <Input
                    bordered={true}
                    labelInto={true}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={'Электронный адрес'}
                />
            </Flex>

            <Divider />

            <PasswordSection direction={'column'}>
                <h5>Пароль</h5>
                <ButtonWrapper>
                    <Button
                        onClick={() => navigate(`${window.location.pathname}/password`)}
                        rightIcon={<Rotate><LeftArrow /></Rotate>}
                        text={'Изменить пароль'}
                        variant={'menu'}
                    />
                </ButtonWrapper>
                <p>Обновите свой пароль, чтобы обеспечить дополнительную защиту вашего аккаунта и повысить уровень безопасности.</p>
            </PasswordSection>
        </Flex>
    )
}

const PasswordSection = styled(Flex)`
    gap: 10px;
    
    h5 {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 20px;
        font-weight: 500;
    }
    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
`

const Rotate = styled.div`
    svg {
        transform: rotate(180deg);
    }
`

const ButtonWrapper = styled.div`
    width: 100%;
    button {
        justify-content: space-between;
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        padding: 15px 16px;
        
        svg {
            height: 16px;
        }
        
        path {
            stroke: ${({ theme }) => theme.colors.textSecondary};
        }
    }
`

const UserAvatar = styled(Flex)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
    
    p {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.primary};
    }
`