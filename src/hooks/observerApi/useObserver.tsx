import { RefObject, useEffect, useState } from "react";
import { basicObserverConfig } from "../../config/basicObserverConfig";

export function useObserver(htmlElement: RefObject<HTMLElement>) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;

            setIsActive(entry.isIntersecting);
        }, basicObserverConfig);

        if (htmlElement) observer.observe(htmlElement.current!);

        return () => {
            if (htmlElement) observer.unobserve(htmlElement.current!);
        };
    }, [htmlElement]);

    return isActive;
}
