import useTheme from "../../hooks/useTheme";
import React from "react";
import { ModalMenu } from "./ModalMenu";
import { Toggle } from "./Toggle";
import { LightMode } from "../Icons/LightMode";
import { DarkMode } from "../Icons/DarkMode";
import { useTranslation } from "react-i18next";

interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
    const { t } = useTranslation();
    const [theme, setTheme] = useTheme();

    return (
        <>
            {theme === "light" ? (
                <button
                    className="bg-white rounded p-2"
                    onClick={() => setTheme("dark")}
                    aria-label={t("toggle.darkMode") as string}
                >
                    <LightMode className="w-4 h-4 fill-purple-600" />
                </button>
            ) : (
                <button
                    className="dark:bg-slate-900 rounded p-2"
                    onClick={() => setTheme("light")}
                    aria-label={t("toggle.lightMode") as string}
                >
                    <DarkMode className="w-4 h-4 dark:fill-yellow-300 transition-all" />
                </button>
            )}
        </>
    );
};
