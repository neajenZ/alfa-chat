import {ActionButton, ActionModal} from "@ui";
import {Delete, Folder, NoSound, Target} from "@icons";

interface IProps {
    y: number,
    x: number
}

export const ChatItemSettings = ({ y, x }: IProps) => {
    return (
        <ActionModal x={x} y={y}>
            <ActionButton>
                <Folder />
                Добавить в папку
            </ActionButton>
            <ActionButton>
                <Target />
                Закрепить чат
            </ActionButton>
            <ActionButton>
                <NoSound />
                Убрать звук
            </ActionButton>
            <ActionButton variant={'danger'}>
                <Delete />
                Удалить чат
            </ActionButton>
        </ActionModal>
    )
}