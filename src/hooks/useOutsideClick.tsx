import React, { useRef, useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(
    ref: React.RefObject<HTMLElement>,
    callback?: () => void
) {
    useEffect(() => {
        /**
         * Alert if clicked/touched outside of element
         */
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback && callback();
            }
        }
        // Bind the event listeners
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            // Unbind the event listeners on clean up
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [ref]);
}
