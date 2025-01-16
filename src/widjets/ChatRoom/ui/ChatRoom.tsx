import {ChatMessages} from "@features/ChatMessages";
import {ChatHeader} from "@features/ChatHeader";
import {Flex} from "@ui";
import {observer} from "mobx-react-lite";
import {useChatRoomStore} from "@providers/ChatRoomProvider/ui/StoreProvider.tsx";
import {UserDrawer} from "@entities/ChatUser";
import {SendMessage} from "@features/SendMessage";
import {GIFDrawer, StickerDrawer} from "@entities/Emoji";
import {QuickReplyList} from "@features/QuickReplyList";


export const ChatRoom = observer(() => {
    const { drawers, closeDrawer, isSearchSticker, handleOpenDrawers, handleOpenStickers } = useChatRoomStore()

    return (
        <Flex align={'stretch'} width={'65%'}>
            <Flex direction={'column'} width={drawers.user ? '55%' : '100%'}>
                <ChatHeader />
                <ChatMessages messages={[]} />
                <SendMessage />
            </Flex>
            { drawers.user &&  <UserDrawer onClose={() => handleOpenDrawers('user', false)} /> }
            { drawers.sticker && <StickerDrawer onClose={() => handleOpenDrawers('sticker', false)} /> }
            { drawers.gif && <GIFDrawer onClose={() => handleOpenDrawers('gif', false)} /> }
            { drawers.reply && <QuickReplyList onClose={() => handleOpenDrawers('reply', false)} /> }
        </Flex>
    )
})
