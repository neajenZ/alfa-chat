import {IndexRouteObject, NonIndexRouteObject, RouteObject} from "react-router-dom";

type IndexOrNotRoute = IndexRouteObject | NonIndexRouteObject

type IndexOrNotRouteFinal = IndexOrNotRoute & {
    title?: string
}

export type ICustomRoute = RouteObject & {
    title?: string
    children: IndexOrNotRouteFinal[]
}