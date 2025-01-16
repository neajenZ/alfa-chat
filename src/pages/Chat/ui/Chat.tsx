import {ChatsLeftSide} from "@widjets/ChatsLeftSide";
import {ChatRoom} from "@widjets/ChatRoom";
import {ChatRoomProvider} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {chatRoomStore} from "@providers/ChatRoomProvider/store.ts";
import {useSearchParams} from "react-router-dom";
import {SaveReplies} from "@widjets/SaveReplies";
import {Folders} from "@widjets/Folders";
import {FirstMessage} from "@widjets/FirstMessage";
import {NotHere} from "@widjets/NotHere";

export const Chat = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    if (searchParams.get('window') === 'save_replies') {
        return <SaveReplies />
    }

    if (searchParams.get('window') === 'folders') {
        return <Folders />
    }

    if (searchParams.get('window') === 'first_message') {
        return <FirstMessage />
    }

    if (searchParams.get('window') === 'not_here') {
        return <NotHere />
    }

    return (
        <>
            <ChatsLeftSide />
            <ChatRoomProvider store={chatRoomStore}>
                <ChatRoom />
            </ChatRoomProvider>
        </>
    )
}