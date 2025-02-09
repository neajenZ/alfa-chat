import {Button, Divider, Flex, LeftSide, SubTitleSide} from "@ui";
import styled from "styled-components";
import {Delete, LeftArrow, Plus} from "@icons";
import {useSearchParams} from "react-router-dom";
import {AddSaveReply} from "@features/AddSaveReply";
import {EditSaveReply} from "@features/EditSaveReply";

export const SaveReplies = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const step = searchParams.get('step')

    const handleStep = (nextStep: 'add' | 'edit') => {
        setSearchParams((prev) => {
            prev.set('step', nextStep)
            return prev
        })
    }

    const redirectToPrev = () => {
        setSearchParams((prev) => {
            const prevSp = prev.get('step')
            if (prevSp === 'add') return { ...prev, window: 'save_replies' }
            if (prevSp === 'edit') return { ...prev, window: 'save_replies' }
            return {}
        })
    }

    return (
        <LeftSide>
            <header>
                <button onClick={redirectToPrev}>
                    <LeftArrow/>
                </button>
                {
                    step === 'add' ? <h5>Добавление сохранённого ответа</h5> :
                        step === 'edit' ? <h5>Редактирование сохранённого ответа</h5> :
                            <h5>Сохранённые ответы</h5>
                }
            </header>

            <Logotype>
                <img src="/faq_logo.png" alt="FAQ"/>
                {
                    step === 'add' || step === 'edit' ? (
                        <p>Сохраните основные ответ, чтобы при необходимости их использовать</p>
                    ) : (
                        <>
                            <p>Теперь может сохранять ответы на часто задаваемые вопросы.</p>
                            <Button
                                text={'Создать сохранённый ответ'}
                                leftIcon={<Plus variant={'white'}/>}
                                onClick={() => handleStep('add')}
                            />
                        </>
                    )
                }
            </Logotype>

            <Divider/>

            {
                step === 'add' ? <AddSaveReply/> :
                    step === 'edit' ? <EditSaveReply /> : (
                    <>
                        <SubTitleSide>Ваши сохраненные ответы</SubTitleSide>

                        <Flex direction={'column'} gap={'10px'}>
                            <ReplyItem onClick={() => handleStep('edit')}>
                                <Flex direction={'column'} gap={'8px'}>
                                    <span>Комбинация клавиш</span>
                                    <p>Собщение</p>
                                </Flex>
                                <button>
                                    <Delete />
                                </button>
                            </ReplyItem>

                        </Flex>
                    </>
                )
            }


        </LeftSide>
    )
}

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