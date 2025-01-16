import {ChatItem, ChatItemSettings} from "@entities/ChatItem";
import {useOutsideClick} from "@hooks/useOutsideClick.ts";
import {useState} from "react";

export const ChatsList = () => {
    const { ref, setIsComponentVisible, isComponentVisible } = useOutsideClick(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleClickContext = (e: MouseEvent, chat: unknown) => {
        console.log(e)
        setPosition({ x: e.x, y: e.y })
        setIsComponentVisible(true)
    }

    return (
        <div ref={ref}>
            <ChatItem onCloseContext={() => setIsComponentVisible(false)} onContextMenu={handleClickContext} chat={{}} />
            <ChatItem onCloseContext={() => setIsComponentVisible(false)} onContextMenu={handleClickContext} chat={{}} />
            <ChatItem onCloseContext={() => setIsComponentVisible(false)} onContextMenu={handleClickContext} chat={{}} />
            { isComponentVisible && <ChatItemSettings y={position.y} x={position.x} /> }
        </div>
    )
}