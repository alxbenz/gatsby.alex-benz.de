import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { LanguageMenu } from "./LanguageMenu";
import { Link } from "gatsby";
import { Trans } from "react-i18next";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav className="z-10 flex justify-end  fixed w-full text-sm/6">
            <div className="flex px-6 py-2 items-center bg-slate-50 dark:bg-slate-950 rounded rounded-tr-none">
                <Link to="/" className="dark:text-slate-300 mr-4">
                    <Trans>home</Trans>
                </Link>
                <Link to="/imprint" className="dark:text-slate-300 mr-4">
                    <Trans>imprint</Trans>
                </Link>

                <div className="mr-4">
                    <ThemeToggle />
                </div>

                <LanguageMenu />
            </div>
        </nav>
    );
};
