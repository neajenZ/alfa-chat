import {SVGProps} from "react";

interface IProps extends SVGProps<SVGSVGElement> {}

export const LeftArrow = (props: IProps) => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M14.1668 2.16634L5.8335 10.4997L14.1668 18.833" stroke="#0D1218" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
)