import {Avatar, Button, Flex, Input, Modal, Select} from "@ui";
import {Camera, Close, Delete} from "@icons";
import styled from "styled-components";

interface IProps {
    onClose?: () => void
}

export const AddMember = ({ onClose }: IProps) => {
    return (
        <Modal>
            <ModalHeader>
                <h5>Добавить нового пользователя</h5>
                <button onClick={onClose}><Close /></button>
            </ModalHeader>
            <AvatarBody>
                <SupTitle>Фото</SupTitle>
                <Flex direction={'column'} align={'center'} gap={'12px'}>
                    <Avatar width={178} height={178}><img src="/user_avatar.png" alt=""/></Avatar>
                    <Flex gap={'12px'} align={'center'}>
                        <button>
                            <Delete width={'17px'} height={'17px'} />
                        </button>
                        <button>
                            <Camera />
                        </button>
                    </Flex>
                </Flex>
            </AvatarBody>
            <Form>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Имя</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Фамилия</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Почта</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Телефон</SupTitle>
                    <Input isMessage={false} placeholder={''} />
                </Flex>
                <FormSelect direction={'column'} align={'flex-start'} gap={'12px'}>
                    <SupTitle>Группа</SupTitle>
                    <Select data={[{ value: 'Alfateam', label: 'Alfateam'}]} onSelect={() => false} />
                </FormSelect>
            </Form>
            <SaveButton>
                <Button text={'Сохранить'} />
            </SaveButton>
        </Modal>
    )
}

const SaveButton = styled.div`
    margin: 20px auto 0 auto;
    width: 40%;
`

const FormSelect = styled(Flex)`
    grid-column: span 2;
`

const Form = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
`


const AvatarBody = styled(Flex)`
    flex-direction: column;
    width: 100%;
    gap: 12px;
    
    h4 {
        
    }
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