import {useEffect, useRef, useState} from "react";

export const useOutsideClick = <T = HTMLDivElement>(initialIsVisible: boolean, func?: (elem: HTMLElement) => void) => {

    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<T | null>(null);

    const handleHideDropdown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
            setIsComponentVisible(false);
        }
    };

    const handleClickOutside = (e: any) => {
        // @ts-ignore
        if (ref.current && !ref.current.contains(e.target)) {
            if (func) func(e)
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return { ref, isComponentVisible, setIsComponentVisible };
}
