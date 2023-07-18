import {
    Trans,
    useI18next,
    Link,
    useTranslation,
} from "gatsby-plugin-react-i18next";
import React from "react";
import { ModalMenu } from "./ModalMenu";
import { Globe } from "../Icons/Globe";

interface LanguageMenuProps {}

export const LanguageMenu: React.FC<LanguageMenuProps> = () => {
    const { languages, originalPath, i18n } = useI18next();
    const { t } = useTranslation();

    return (
        <ModalMenu
            label={
                <div className="bg-white dark:bg-slate-900 rounded p-2">
                    <Globe className="w-4 h-4 fill-purple-600 dark:fill-yellow-300 " />
                </div>
            }
            aria-label={t("toggle.language") as string}
        >
            {languages.map((lng) => (
                <div className="whitespace-nowrap">
                    {lng !== i18n.language ? (
                        <Link
                            to={originalPath}
                            language={lng}
                            className="underline hover:no-underline"
                        >
                            {lng.toUpperCase()} - <Trans>{lng}</Trans>
                        </Link>
                    ) : (
                        <>
                            {lng.toUpperCase()} - <Trans>{lng}</Trans>
                        </>
                    )}
                </div>
            ))}
        </ModalMenu>
    );
};
