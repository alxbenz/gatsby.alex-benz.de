import { Trans, useI18next, Link } from "gatsby-plugin-react-i18next";
import React from "react";

interface LanguageToggleProps {}

export const LanguageToggle: React.FC<LanguageToggleProps> = () => {
    const { languages, originalPath, i18n } = useI18next();

    return (
        <div className="dark:text-slate-300">
            <div className="absolute flex flex-col items-start">
                {i18n.language.toUpperCase()} -
                {languages.map((lng) => (
                    <Link to={originalPath} language={lng}>
                        <Trans>{lng}</Trans>
                    </Link>
                ))}
            </div>
        </div>
    );
};
