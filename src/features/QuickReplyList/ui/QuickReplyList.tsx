import styled from "styled-components";
import {Drawer, Flex} from "@ui";
import {Plus, PlusCircle, Search} from "@icons";
import {Input} from "../../../app/shared/ui/Input.tsx";

interface IProps {
    onClose: () => void
}

export const QuickReplyList = ({ onClose }: IProps) => {

    return (
        <Drawer title={'Сохранённые ответы'} onClose={onClose}>
            <Flex align={'stretch'} gap={'10px'}>
                <Input
                    placeholder={'Поиск'}
                    leftButtons={<button><Search/></button>}
                    isMessage={false}
                />
                <Button>
                    <Plus />
                </Button>
            </Flex>

            <Divider />

            <Flex direction={'column'} gap={'10px'}>
                <Reply>
                    <PlusCircle />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>Привет</span>
                        <p>Вас приветствует помощник Магзум, задавайте свои вопросы.</p>
                    </Flex>
                </Reply>
                <Reply>
                    <PlusCircle />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>Привет</span>
                        <p>Вас приветствует помощник Магзум, задавайте свои вопросы.</p>
                    </Flex>
                </Reply>
                <Reply>
                    <PlusCircle />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>Привет</span>
                        <p>Вас приветствует помощник Магзум, задавайте свои вопросы.</p>
                    </Flex>
                </Reply>
                <Reply>
                    <PlusCircle />
                    <Flex direction={'column'} align={'flex-start'}>
                        <span>Привет</span>
                        <p>Вас приветствует помощник Магзум, задавайте свои вопросы.</p>
                    </Flex>
                </Reply>
            </Flex>
        </Drawer>
    )
}

const Divider = styled.div`
    width: 100%;
    height: 8px;
    border-radius: 19px;
    background-color: #FAFAFA;
    margin: 30px 0;
`

const Reply = styled(Flex)`
    align-items: flex-start;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    padding: 10px 16px;
    border-radius: 10px;
    gap: 10px;
    
    svg {
        min-width: 20px;
        min-height: 21px;
        margin-top: 6px;
    }
    
    span {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
    }
    
    p {
        color: ${({ theme }) => theme.colors.text};
        font-size: 14px;
        font-weight: 500;
    }
`

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    border-radius: 10px;
    min-width: 50px;
`