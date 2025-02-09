import {matchRoutes, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {ICustomRoute} from "@shared-types/route.ts";

export const usePageTitle = (routes: ICustomRoute[], currentRoute: 'chat' | 'settings'): string => {
    const [title, setTitle] = useState('')
    const location = useLocation();

    useEffect(() => {
        const route = location.pathname !== '/settings' ? location.pathname.replace(`/${currentRoute}`, '') : location.pathname.replace(currentRoute, '')
        const matches = matchRoutes(routes, route);
        if (matches) {
            const lastMatch = matches[matches.length - 1];
            const routeTitle = lastMatch.route.title;
            if (routeTitle) {
                document.title = routeTitle;
                setTitle(routeTitle)
            }
        }
    }, [location, routes]);

    return title;
}