import type {ICustomRoute} from "@shared-types/route.ts";
import {ChatLayout} from "@layouts/ChatLayout";
import {Chat} from "./ui/Chat.tsx";

// Переместить на уровень app все роуты также layouts
export const routes: ICustomRoute[] = [
    {
        path: '/',
        title: 'Сообщения',
        element: <ChatLayout />,
        children: [
            {
                index: true,
                title: 'Сообщения',
                element: <></>
            },
            {
                path: ':id',
                title: 'Чат',
                element: <Chat />
            }
        ]
    }
]
