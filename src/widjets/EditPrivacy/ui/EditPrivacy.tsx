import {Divider, Flex, SubTitleSide, ToggleButton} from "@ui";
import styled from "styled-components";

export const EditPrivacy = () => {
    return (
        <>
            <Divider />

            <SubTitleSide>Расширенные</SubTitleSide>

            <Flex direction={'column'} gap={'10px'}>
                <ToggleButton label={'Отключить предпросмотр ссылок'} />
                <Description>
                    Чтобы ваш IP-адрес не смогли вычислить сторонние веб-сайтов, предпросмотр ссылок, которыми вы делитесь в чатах, будет отключен.
                </Description>
            </Flex>
        </>
    )
}

const Description = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 14px;
    font-weight: 500;
`

const BodyTitle = styled.h5`
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`