import React from "react";
import { GitHub } from "../Icons/GitHub";
import { Mail } from "../Icons/Mail";
import { Xing } from "../Icons/Xing";
import { LinkedIn } from "../Icons/LinkedIn";

import { Headline } from "../Global/Headline";
import { Information, Intro as IntroInterface } from "../../types";
import { useTranslation } from "react-i18next";

interface IntroProps {
    intro: IntroInterface;
    information: Information;
}

export const Intro: React.FC<IntroProps> = ({ intro, information }) => {
    const { t } = useTranslation();

    const getIcon = (id: string) => {
        const classes = "w-5 h-5 mr-1 fill-white opacity-50";
        switch (id) {
            case "GitHub":
                return <GitHub className={classes} />;
            case "Xing":
                return <Xing className={classes} />;
            case "LinkedIn":
                return <LinkedIn className={classes} />;
            case "Mail":
                return <Mail className={classes} />;
        }
    };
    return (
        <>
            <Headline content={t(intro.h2)} type="orange" className="mt-16" />
            <h3 className="mt-8 font-light ">{t(intro.p)}</h3>

            <div className="mt-8 flex flex-wrap justify-center items-center [&>a+a]:ml-6">
                {information.links.map((link) => (
                    <a
                        href={link.url}
                        key={link.id}
                        className="flex items-center underline hover:no-underline"
                    >
                        {getIcon(link.id)}
                        {link.id}
                    </a>
                ))}
            </div>
            <div className="mt-16 text-center text-xs opacity-50">
                powered by next.js, tailwindcss, typescript
            </div>
        </>
    );
};
