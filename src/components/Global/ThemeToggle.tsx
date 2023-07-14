import useTheme from "../../hooks/useTheme";
import React from "react";
import { ModalMenu } from "./ModalMenu";
import { Toggle } from "./Toggle";
import { LightMode } from "../Icons/LightMode";
import { DarkMode } from "../Icons/DarkMode";

interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
    const [theme, setTheme] = useTheme();

    return (
        <>
            {theme === "light" ? (
                <button
                    className="bg-white rounded p-2"
                    onClick={() => setTheme("dark")}
                >
                    <LightMode className="w-4 h-4 fill-purple-600" />
                </button>
            ) : (
                <button
                    className="dark:bg-slate-900 rounded p-2"
                    onClick={() => setTheme("light")}
                >
                    <DarkMode className="w-4 h-4 dark:fill-yellow-300 transition-all" />
                </button>
            )}
        </>
    );
};
