import type {ICustomRoute} from "@shared-types/route.ts";
import {CompanyPage} from "./ui/Company.tsx";
import {CompanyLayout} from "@layouts/CompanyLayout";
import {CompanyMembers} from "@pages/CompanyMembers";
import {CompanySocials} from "@pages/CompanySocials";
import {CompanyGroups} from "@pages/CompanyGroups";

// Переместить на уровень app все роуты также layouts
export const routes: ICustomRoute[] = [
    {
        path: '/',
        title: 'Компания',
        element: <CompanyLayout />,
        children: [
            {
                index: true,
                title: 'Компания',
                element: <CompanyPage />
            },
            {
                path: 'members',
                title: 'Участники',
                element: <CompanyMembers />
            },
            {
                path: 'socials',
                title: 'Аккаунты',
                element: <CompanySocials />
            },
            {
                path: 'groups',
                title: 'Группы',
                element: <CompanyGroups />
            },
        ]
    }
]
