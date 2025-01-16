import { useEffect } from 'react';
import { useLocation, matchRoutes } from 'react-router-dom';

// Передайте сюда список маршрутов с заголовками
export const PageDynamicTitle: React.FC<{ routes: any[] }> = ({ routes }) => {
    const location = useLocation();

    useEffect(() => {
        // Найти текущий маршрут
        const matches = matchRoutes(routes, location.pathname);
        if (matches) {
            const lastMatch = matches[matches.length - 1];
            const routeTitle = lastMatch.route.title;

            // Установить заголовок страницы
            if (routeTitle) {
                document.title = routeTitle; // Меняет заголовок в <head>
            }
        }
    }, [location, routes]);

    return null; // Этот компонент не рендерит ничего
};

