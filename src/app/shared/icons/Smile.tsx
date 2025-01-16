import {SVGProps} from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const Smile = (props: IProps) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
            stroke="#2B81C8" stroke-width="1.5"/>
        <path d="M8 15C8.85 15.63 9.885 16 11 16C12.115 16 13.15 15.63 14 15" stroke="#2B81C8" stroke-width="1.5"
              stroke-linecap="round"/>
        <path
            d="M15 9.5C15 10.328 14.552 11 14 11C13.448 11 13 10.328 13 9.5C13 8.672 13.448 8 14 8C14.552 8 15 8.672 15 9.5Z"
            fill="#2B81C8"/>
        <path
            d="M8 11C8.55228 11 9 10.3284 9 9.5C9 8.67157 8.55228 8 8 8C7.44772 8 7 8.67157 7 9.5C7 10.3284 7.44772 11 8 11Z"
            fill="#2B81C8"/>
    </svg>
)