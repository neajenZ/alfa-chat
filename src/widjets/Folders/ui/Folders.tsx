import {Button, Divider, Input, Flex, LeftSide} from "@ui";
import styled from "styled-components";
import {Delete, Drag, LeftArrow, Plus} from "@icons";
import {useSearchParams} from "react-router-dom";
import {EditSaveReply} from "@features/EditSaveReply";
import {SelectedChats} from "./SelectedChats/SelectedChats.tsx";
import {useFolderRoomStore} from "@widjets/Folders/providers/context.tsx";
import {observer} from "mobx-react-lite";
import {SelectChats} from "@widjets/Folders/ui/SelectChats/SelectChats.tsx";
import {size} from "@styles/size.ts";
import {SubTitleSide} from "@ui";

export const Folders = observer(() => {
    const { isSearchChat, setSearchChat } = useFolderRoomStore()
    const [searchParams, setSearchParams] = useSearchParams()
    const step = searchParams.get('step')

    const handleStep = (nextStep: 'add' | 'edit') => {
        setSearchParams((prev) => {
            prev.set('step', nextStep)
            return prev
        })
    }

    const redirectToPrev = () => {
        if (isSearchChat) {
            return setSearchChat(false)
        }
        setSearchParams((prev) => {
            const prevSp = prev.get('step')
            if (prevSp === 'add') return { ...prev, window: 'folders' }
            if (prevSp === 'edit') return { ...prev, window: 'folders' }
            return {}
        })
    }

    return (
        <LeftSide>
            <header>
                <button onClick={redirectToPrev}>
                    <LeftArrow/>
                </button>
                <h5>
                    {
                        isSearchChat ? 'Выбранные чаты' : step === 'add' ? 'Новая папка' : 'Папки с чатами'
                    }
                </h5>

            </header>
            {
                isSearchChat ? <SelectChats /> : (
                    <>
                        <Logotype>
                            <img src="/folder_logo.png" alt="Folders"/>
                            {
                                step === 'add' ? (
                                    <>
                                        <p>Выберите чаты которые хотите видеть в этой папке, и настройте отображение по вашему
                                            удобству</p>
                                        <Input placeholder={'Название папки'} isMessage={false} bordered={true} />
                                    </>
                                ) : (
                                    <>
                                        <p>Организуйте чаты по папкам и легко переключайтесь между ними, создавая удобную систему для общения.</p>
                                        <Button
                                            text={'Добавить папку'}
                                            leftIcon={<Plus variant={'white'}/>}
                                            onClick={() => handleStep('add')}
                                        />
                                    </>
                                )
                            }
                        </Logotype>

                        <Divider/>

                        {
                            step === 'add' ? <SelectedChats /> :
                                step === 'edit' ? <EditSaveReply /> : (
                                    <>
                                        <SubTitleSide>Ваши папки с чатами</SubTitleSide>

                                        <Flex direction={'column'} gap={'10px'}>
                                            <ReplyItem>
                                                <Flex direction={'column'} gap={'8px'}>
                                                    <p>Работа</p>
                                                    <span>12 чатов</span>
                                                </Flex>
                                                <ItemActions>
                                                    <button>
                                                        <Delete/>
                                                    </button>
                                                    <button>
                                                        <Drag/>
                                                    </button>
                                                </ItemActions>
                                            </ReplyItem>
                                        </Flex>

                                        <Divider />

                                        <SubTitleSide>Рекомендованные папки</SubTitleSide>

                                        <Flex direction={'column'} gap={'10px'}>
                                            <ReplyItem>
                                                <Flex direction={'column'} gap={'8px'}>
                                                    <p>Новые</p>
                                                    <span>Чаты с новыми сообщениями.</span>
                                                </Flex>
                                                <Button size={'small'} text={'Добавить'} />
                                            </ReplyItem>

                                        </Flex>
                                    </>
                                )
                        }
                    </>
                )
            }
        </LeftSide>
    )
})

const ItemActions = styled(Flex)`
    gap: 10px;
    align-items: center;
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
    
    @media (${size.laptop}) {
        gap: 3px;
    }
`

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;

    @media (${size.laptop}) {
        font-size: 17px;
    }
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
    
    @media (${size.laptop}) {
        img {
            width: 100px;
        }
        
        p {
            font-size: 13px;
        }
    }
`