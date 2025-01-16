import {Button, Flex, Input, Modal, Select} from "@ui";
import {Close} from "@icons";
import styled from "styled-components";

interface IProps {
    onClose?: () => void
}

export const EditSocial = ({ onClose }: IProps) => {
    return (
        <Modal>
            <ModalHeader>
                <h5>Редактировать аккаунт</h5>
                <button onClick={onClose}><Close /></button>
            </ModalHeader>
            <Form>
                <Flex style={{ gridColumn: 'span 2' }} direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Название аккаунта</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <Flex style={{ gridColumn: 'span 2' }} direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Выберите Социальную сеть</SupTitle>
                    <Select data={[{ value: 'Alfateam', label: 'Alfateam'}]} onSelect={() => false} />
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Логин</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Пароль</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
            </Form>

            <SaveButton>
                <Button text={'Сохранить'} />
            </SaveButton>
        </Modal>
    )
}

const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
`

const SaveButton = styled.div`
    margin: 20px auto 0 auto;
    width: 40%;
`

const SupTitle = styled.h4`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 500;
`

const ModalHeader = styled(Flex)`
    justify-content: space-between;
    align-items: center;
    padding-bottom: 14px;
    margin-bottom: 20px;
    
    h5 {
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
`