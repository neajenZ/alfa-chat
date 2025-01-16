import {Flex, Modal} from "@ui";
import {Close} from "@icons";
import styled from "styled-components";

interface IProps {
    onClose: () => void
}

export const DeleteSelectedModal = ({ onClose }: IProps) => {
    return (
        <Modal>
            <Header>
                <h5>Удалить сообщение</h5>
                <Button onClick={onClose}>
                    <Close />
                </Button>
            </Header>

            <Flex margin={'20px 0 0 0'} direction={'column'} gap={'10px'}>
                <DeleteButton>
                    Удалить у меня и у Maghym Ayash
                </DeleteButton>
                <DeleteButton>
                    Удалить только у себя
                </DeleteButton>
            </Flex>
        </Modal>
    )
}

const Header = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    
    h5 {
        font-size: 20px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.text};
    }
`

const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.backgroundBlock};
    display: flex;
    align-items: center;
    justify-content: center;
`

const DeleteButton = styled.button`
    text-align: center;
    width: 100%;
    padding: 18px 0;
    color: #E16070;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    
    &:hover {
        background-color: #E1607033;
    }
`