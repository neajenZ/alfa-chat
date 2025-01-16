import {Button, Flex, Input, Modal} from "@ui";
import {Close} from "@icons";
import styled from "styled-components";

interface IProps {
    onClose?: () => void
}

export const EditGroup = ({ onClose }: IProps) => {
    return (
        <Modal>
            <ModalHeader>
                <h5>Редактировать группу</h5>
                <button onClick={onClose}><Close /></button>
            </ModalHeader>
            <Flex direction={'column'} align={'flex-start'} gap={'12px'}>
                <SupTitle>Название группы</SupTitle>
                <Input isMessage={false} placeholder={''} />
            </Flex>
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