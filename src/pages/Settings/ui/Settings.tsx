import {LeftSide} from "@ui";
import {Outlet} from "react-router-dom";
import {usePageTitle} from "@hooks/usePageTitle.ts";
import {routes} from "../route.tsx";

export const Settings = () => {
    const title = usePageTitle(routes)

    return (
        <LeftSide>
            <header>
                <h5>{title}</h5>
            </header>
            <Outlet />
        </LeftSide>
    )
}