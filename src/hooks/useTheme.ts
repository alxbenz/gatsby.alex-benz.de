import { useEffect, useLayoutEffect, useState } from "react";

type Theme = "dark" | "light" | "system";;

const defaultTheme = "light";

function useTheme() {
    const [theme, setTheme] = useState<Theme>();

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");

        console.log('init', currentTheme);

        setTheme(currentTheme ? (currentTheme as Theme) : defaultTheme);
    }, []);

    useEffect(() => {
        if (!theme) return;

        let currentTheme = theme;

        if (currentTheme === "system") {
            currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        const root = window.document.documentElement;

        root.classList.remove("dark", "light", "system");
        root.classList.add(currentTheme);

        console.log('theme changed', currentTheme);
        console.log('theme changed ->', theme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme] as const;
}

export default useTheme;
