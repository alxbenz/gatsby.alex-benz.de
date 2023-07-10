import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageToggle } from "./LanguageToggle";
import { Link } from "gatsby";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav className="z-10 px-6 py-2 flex justify-end fixed bg-opacity-90 w-full text-sm/6">
            <Link to="/" className="dark:text-slate-300 mr-4">
                Home
            </Link>
            <Link to="/imprint" className="dark:text-slate-300  mr-4">
                Impressum
            </Link>

            <ThemeToggle />
            <LanguageToggle />
        </nav>
    );
};
