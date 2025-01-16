import { Settings } from './ui/Settings.tsx'
import {UserData} from "@widjets/UserData";
import {EditUserNotifications} from "@widjets/EditUserNotifications";
import {EditPrivacy} from "@widjets/EditPrivacy";
import {EditChatsSettings} from "@widjets/EditChatsSettings";
import {EditWallpapersChat} from "@widjets/EditWallpapersChat";
import {ChangePasswordSettings, EditUserSettings} from "@entities/User";
import {ICustomRoute} from "@shared-types/route.ts";

export const routes: ICustomRoute[] = [
    {
        path: '/',
        title: 'Настройки',
        element: <Settings />,
        children: [
            {
                index: true,
                title: 'Настройки',
                element: <UserData />
            },
            {
                path: 'notifications',
                title: 'Уведомления',
                element: <EditUserNotifications />
            },
            {
                path: 'privacy',
                title: 'Конфиденциальность',
                element: <EditPrivacy />
            },
            {
                path: 'user',
                title: 'Личные данные',
                children: [
                    {
                        index: true,
                        title: 'Личные данные',
                        element: <EditUserSettings />
                    },
                    {
                        title: 'Изменить пароль',
                        path: '/user/password',
                        element: <ChangePasswordSettings />
                    }
                ]
            },
            {
                path: 'chats',
                title: 'Чаты',
                children: [
                    {
                        index: true,
                        title: 'Чаты',
                        element: <EditChatsSettings />
                    },
                    {
                        path: '/chats/wallpapers',
                        title: 'Обои для чата',
                        element: <EditWallpapersChat />
                    }
                ]
            }
        ]

    }
]
