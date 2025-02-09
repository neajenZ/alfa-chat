import {Button, Divider, Flex, SubTitleSide, ToggleButton} from "@ui";
import styled from "styled-components";
import {Delete, LeftArrow} from "@icons";
import {Remove} from "../../../app/shared/icons/Remove.tsx";
import {useNavigate} from "react-router-dom";

export const EditChatsSettings = () => {
    const navigate = useNavigate()

    return (
        <>
            <SubTitleSide style={{ marginTop: '20px'}}>Обои</SubTitleSide>

            <Flex direction={'column'} gap={'10px'}>
                <ButtonWrapper>
                    <Button
                        onClick={() => navigate(`${window.location.pathname}/wallpapers`)}
                        rightIcon={<Rotate><LeftArrow /></Rotate>}
                        text={'Обои чата'}
                        variant={'menu'}
                    />
                </ButtonWrapper>
                <Description>
                    Измените оформление чатов, выбрав новые обои, чтобы создать уникальную и приятную атмосферу общения
                </Description>
            </Flex>

            <Divider />

            <RemoveButtons direction={'column'}>
                <Button text={'Очистить все чаты'} color={'#E16070'} variant={'menu'} leftIcon={<Remove />} />
                <Button text={'Удалить все чаты'} color={'#E16070'} variant={'menu'} leftIcon={<Delete />} />
            </RemoveButtons>
        </>
    )
}

const RemoveButtons = styled(Flex)`
    svg {
        width: 24px;
    }
`

const ButtonWrapper = styled.div`
    button {
        justify-content: space-between;
        background-color: ${({ theme }) => theme.colors.backgroundBlock};
        padding: 15px 16px;
        
        svg {
            height: 16px;
        }
        
        path {
            stroke: ${({ theme }) => theme.colors.textSecondary};
        }
    }
`

const Rotate = styled.div`
    svg {
        transform: rotate(180deg);
    }
`

const Description = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 500;
`

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin: 30px 0 10px 0;
`