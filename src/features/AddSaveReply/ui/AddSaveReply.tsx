import {Button, Flex} from "@ui";
import {Input} from "../../../app/shared/ui/Input.tsx";
import styled from "styled-components";

export const AddSaveReply = () => {

    return (
        <Flex direction={'column'} gap={'20px'}>
            <Item>
                <Input isMessage={false} bordered={true} placeholder={'Комбинация клавиш'} />
                <p>Напишите ниже комбинацию клавиш для сообщения. Когда вы введеты эту комбинацию в окно для отправки сообщения, в нем появится ваш ответ.</p>
            </Item>
            <Item>
                <Input isMessage={false} bordered={true} placeholder={'Сообщение'} />
                <p>Введите полный текст сообщения, которвые вы хотите отправлять клиентам.</p>
            </Item>
            <Button text={'Сохранить'} />
        </Flex>
    )
}

const Item = styled.div`
    p {
        color: ${({ theme }) => theme.colors.textSecondary};
        font-size: 14px;
        font-weight: 500;
        margin-top: 11px;
    }
`
