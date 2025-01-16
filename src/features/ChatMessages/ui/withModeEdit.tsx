import React from "react";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {Flex, SelectButton} from "@ui";
import {IMessage} from "@entities/Message/model.ts";


// Типы для пропсов исходного компонента
interface WithStoreProps {
    message: IMessage; // Пример передаваемого пропа
}

// HOC функция
function withModeEdit<P extends WithStoreProps>(
    WrappedComponent: React.ComponentType<P>
) {
    const HOC = (props: WithStoreProps) => {
        const { mode, selectedMessages, addSelectedMessages, deleteSelectedMessages } = useChatRoomStore()
        if (mode === 'edit' && !props.message.isOutgoing) {
            const isActive = selectedMessages.some((i) => i === props.message.id)

            const handleClick = () => {
                if (isActive) {
                    deleteSelectedMessages(props.message.id)
                } else {
                    addSelectedMessages(props.message.id)
                }
            }

            return (
                <Flex align={'flex-end'} gap={'10px'}>
                    <button onClick={handleClick}>
                        <SelectButton isActive={isActive} />
                    </button>
                    <WrappedComponent
                        {...(props as P)}
                        message={props.message}
                    />
                </Flex>
            )
        }

        return (
            <WrappedComponent
                {...(props as P)} // Передача остальных пропсов
                message={props.message}
            />
        );
    };

    return observer(HOC); // Наблюдаем за изменениями стора
}

export default withModeEdit