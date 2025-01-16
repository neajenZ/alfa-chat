import {Button, Divider, Flex, Input} from "@ui";
import {useState} from "react";
import styled from "styled-components";
import {PasswordVisible} from "@icons";

export const ChangePasswordSettings = () => {
    const [passwords, setPasswords] = useState([
        {
            label: 'Старый пароль',
            value: '',
            visible: true
        },
        {
            label: 'Новый пароль',
            value: '',
            visible: true
        },
        {
            label: 'Повторите пароль',
            value: '',
            visible: true
        },
    ])
    const [password, setPassword] = useState('')

    const handleChange = (value: string, index: number) => {
        setPasswords((prev) => {
            return prev.map((i, indexInner) => {
                if (indexInner === index) {
                    return { ...i, value }
                }
                return i
            })
        })
    }

    const handleChangeVisible = (index: number) => {
        setPasswords((prev) => {
            return prev.map((i, indexInner) => {
                if (indexInner === index) {
                    return { ...i, visible: !i.visible }
                }
                return i
            })
        })
    }

    return (
        <>
            <Divider />
            <Flex direction={'column'} gap={'10px'}>
                {
                    passwords.map((i, index) => (
                        <Input
                            key={i.label}
                            bordered={true}
                            labelInto={true}
                            value={i.value}
                            placeholder={i.label}
                            visible={i.visible}
                            rightButtons={(
                                <button onClick={() => handleChangeVisible(index)}>
                                    <PasswordVisible/>
                                </button>
                            )}
                            onChange={(e) => handleChange(e.target.value, index)}
                        />
                    ))
                }
                <Item>
                    <span />
                    <p>8 и более символов</p>
                </Item>
                <Item>
                    <span />
                    <p>Цифры</p>
                </Item>
                <Item>
                    <span />
                    <p>Знаки пунктуации (!”№;%:?*_+,)</p>
                </Item>
            </Flex>
            <ButtonWrapper>
                <Button text={'Сохранить'} />
            </ButtonWrapper>
        </>
    )
}

const ButtonWrapper = styled.div`
    margin: 30px auto 0 auto;
    width: 50%;
`

const Item = styled(Flex)`
    gap: 10px;
    align-items: center;
    
    span {
        width: 6px;
        height: 6px;
        border-radius: 6px;
        background: ${({ theme }) => theme.colors.borderColor};
    }
    
    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 16px;
        font-weight: 500;
    }
`