import {Button, Divider, Flex, Input, LeftSide, SelectButton, SubTitleSide, TextArea, ToggleButton} from "@ui";
import styled from "styled-components";
import {LeftArrow, Plus} from "@icons";
import {useSearchParams} from "react-router-dom";
import {size} from "@styles/size.ts";

export const NotHere = () => {
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
                <img src="/nothere_logo.png" alt="NotHere"/>
                <p>Отправляйте автоматический ответ, если отсутствуете на месте. Рассылка сообщений “Нет на месте” проводится, только если телефон подключен к Интернету.</p>
                <ToggleButton label={'Отправлять “Нет на месте”'} />
            </Logotype>

            <Divider/>

            <SubTitleSide>Сообщение “Нет на месте”</SubTitleSide>
            <TextArea placeholder={'Пример'} />

            <Divider />

            <Toggles>
                <ToggleItem>
                    <SelectButton isActive={true} />
                    <Flex direction={'column'} >
                        <p>Отправлять всегда</p>
                        <span>Отправлять автоматически когда вы не в сети.</span>
                    </Flex>
                </ToggleItem>
                <DividerToggle />
                <ToggleItem>
                    <SelectButton isActive={false} />
                    <Flex direction={'column'} >
                        <p>По расписанию</p>
                        <span>Отправлять автоматический ответ только в течение указонного времени.</span>
                    </Flex>
                </ToggleItem>
            </Toggles>

            <TimesContainer margin={'20px 0 0 0'} align={'center'} gap={'40px'}>
                <RepeatItem>
                    <p>От:</p>
                    <Input placeholder={'XX:XX'} isMessage={false}/>
                </RepeatItem>
                <RepeatItem>
                    <p>До:</p>
                    <Input placeholder={'XX:XX'} isMessage={false}/>
                </RepeatItem>
            </TimesContainer>

        </LeftSide>
    )
}

const TimesContainer = styled(Flex)`
    @media (${size.notebook}) {
        gap: 10px;
    }    
`

const DividerToggle = styled.div`
    height: 1px;
    width: 100%;
    background: #2B81C826;
`

const ToggleItem = styled(Flex)`
    align-items: center;
    gap: 10px;
    width: 100%;
`

const RepeatItem = styled(Flex)`
    gap: 10px;
    align-items: center;
    width: 50%;
    
    div {
        width: 100%;
        justify-content: center;
    }
    input {
        text-align: center;
        margin: 0;
        width: 65px;
    }
    input::placeholder {
        text-align: center;
    }

    @media (${size.notebook}) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const Toggles = styled(Flex)`
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    padding: 16px;
    border-radius: 10px;
    gap: 16px;

    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }

    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }
`

const ReplyItem = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;

    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
    
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 16px;
        font-weight: 500;
    }
    
    &:hover {
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        
    }
`

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
