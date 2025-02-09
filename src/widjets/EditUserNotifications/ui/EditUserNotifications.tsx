import {Divider, Flex, SubTitleSide, ToggleButton} from "@ui";
import styled from "styled-components";

export const EditUserNotifications = () => {
    return (
        <>
            <Divider />

            <SubTitleSide>Уведомление о сообщениях</SubTitleSide>

            <Flex direction={'column'} gap={'10px'}>
                <ToggleButton label={'Показывать уведомления'} />
                <ToggleButton label={'Имена в уведомлениях'} />
            </Flex>

            <Divider />

            <SubTitleSide>Уведомление групп</SubTitleSide>

            <Flex direction={'column'} gap={'10px'}>
                <ToggleButton label={'Показывать уведомления'} />
            </Flex>
        </>
    )
}

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`