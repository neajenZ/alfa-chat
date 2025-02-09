import {ChatRoom} from "@widjets/ChatRoom";
import {ChatRoomProvider} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {chatRoomStore} from "@providers/ChatRoomProvider/store.ts";

export const Chat = () => {

    return (
        <>
            <ChatRoomProvider store={chatRoomStore}>
                <ChatRoom />
            </ChatRoomProvider>
        </>
    )
}