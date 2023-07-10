import useTheme from "../../hooks/useTheme";
import React from "react";

interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
    const [theme, setTheme] = useTheme();

    return (
        <div className="dark:text-slate-300 mr-4">
            theme: {theme}
            <div className="absolute flex flex-col items-start">
                <button className="mt-2" onClick={() => setTheme("light")}>
                    light
                </button>
                <button className="mt-2" onClick={() => setTheme("dark")}>
                    dark
                </button>
                <button className="mt-2" onClick={() => setTheme("system")}>
                    system
                </button>
            </div>
        </div>
    );
};
