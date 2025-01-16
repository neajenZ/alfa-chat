import {Button, Divider, Flex, LeftSide, TextArea, ToggleButton} from "@ui";
import styled from "styled-components";
import {LeftArrow, Plus} from "@icons";
import {useSearchParams} from "react-router-dom";

export const FirstMessage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const redirectToPrev = () => {
        setSearchParams((prev) => ({}))
    }

    return (
        <LeftSide>
            <header>
                <button onClick={redirectToPrev}>
                    <LeftArrow/>
                </button>
                <h5>Приветственное сообщение</h5>
            </header>
            <Logotype>
                <img src="/firstmessage_logo.png" alt="NotHere"/>
                <p>Отправляйте приветственные сообщения при первом обращении клиента или при отсутствии активности в течение 14 дней. Сообщения не будет отправляться, если ваш телфон не подключен к Интернету.</p>
                <ToggleButton label={'Приветственное сообщение'} />
            </Logotype>

            <Divider/>

            <BodyTitle>Ваше приветственное сообщение</BodyTitle>

            <TextArea placeholder={'Пример'} />
        </LeftSide>
    )
}

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`

const Logotype = styled(Flex)`
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
        text-align: center;
    }
`