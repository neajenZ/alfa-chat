import {matchRoutes, Outlet, useLocation, useSearchParams} from "react-router-dom";
import {ChatsLeftSide} from "@widjets/ChatsLeftSide";
import {NotHere} from "@widjets/NotHere";
import {FirstMessage} from "@widjets/FirstMessage";
import {SaveReplies} from "@widjets/SaveReplies";
import {Folders} from "@widjets/Folders";
import {routes} from "@pages/Chat/route.tsx";
import {usePageTitle} from "@hooks/usePageTitle.ts";

export const ChatLayout = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentPage = usePageTitle(routes, 'chat')



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
            { (currentPage === 'Чат' && window.outerWidth <= 480) ? null : <ChatsLeftSide /> }
            <Outlet />
        </>
    )
}