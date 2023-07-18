import React, { useRef, useState } from "react";
import { useOutsideAlerter } from "../../hooks/useOutsideClick";

interface ModalMenuProps {
    children: React.ReactNode;
    label?: React.ReactNode;
    ariaLabel: string;
}

export const ModalMenu: React.FC<ModalMenuProps> = ({
    children,
    label = <></>,
    ariaLabel,
}) => {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [show, setShow] = useState(false);
    useOutsideAlerter(wrapperRef, () => {
        setShow(false);
    });

    return (
        <div className="dark:text-slate-300 relative" ref={wrapperRef}>
            <div className="flex flex-col items-start">
                <button
                    type="button"
                    onClick={() => {
                        setShow(!show);
                    }}
                    aria-label={ariaLabel}
                >
                    {label}
                </button>
                {show && (
                    <>
                        <div className="h-4 w-full bg-purple-950 dark:bg-yellow-300 animate-fade-in absolute right-0 top-0 -translate-y-full" />
                        <div className="animate-fade-in-up absolute top-full right-0 dark:bg-yellow-300 dark:text-slate-950 bg-purple-950 text-white p-4 rounded-l rounded-br">
                            {children}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
