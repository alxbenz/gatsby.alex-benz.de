import React from "react";
import { Headline } from "../Global/Headline";
import { Trans, useTranslation } from "react-i18next";

interface SectionProps {
    h2?: string;
    sub?: string;
    p?: string[];
    children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ h2, sub, p, children }) => {
    const { t } = useTranslation();

    console.log(p);

    return (
        <section className="py-12">
            <div className="mx-6 md:mx-12 lg:mx-16">
                {h2 && <Headline content={t(h2)} type="purple" />}
                {sub && (
                    <p className="font-semibold mt-6 text-slate-700 dark:text-slate-300">
                        <Trans>{sub}</Trans>
                    </p>
                )}
                {p &&
                    p.map((paragraph, index) => (
                        <p
                            className="mt-3 text-slate-700 dark:text-slate-300"
                            key={index}
                        >
                            <Trans>{paragraph}</Trans>
                        </p>
                    ))}
            </div>
            {children && (
                <div className="mx-6 mt-12 md:mx-12 lg:mx-16">{children}</div>
            )}
        </section>
    );
};
