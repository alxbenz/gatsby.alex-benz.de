import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Navigation } from "../components/Global/Navigation";
import { ContentSplit } from "../components/Global/ContentSplit";
import { Section } from "../components/Global/Section";

import { Trans, useTranslation } from "react-i18next";
import { PageContext } from "gatsby-plugin-react-i18next/dist/types";

const ImprintPage: React.FC<PageProps> = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="relative text-sm/6 min-h-screen">
                <Navigation />
                <ContentSplit
                    right={
                        <div className="">
                            <Section
                                h2={"imprint.title"}
                                p={
                                    t("imprint.address", {
                                        returnObjects: true,
                                    }) as string[]
                                }
                                sub={"imprint.sub"}
                            />
                            <Section
                                sub={"imprint.liability"}
                                p={["imprint.disclaimer"]}
                            />
                            <Section
                                h2={"privacy.title"}
                                p={
                                    t("privacy.content", {
                                        returnObjects: true,
                                    }) as string[]
                                }
                            />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default ImprintPage;

export const Head: HeadFC = (props) => {
    const context = props.pageContext as PageContext;
    const title = context.language === "en" ? "Imprint" : "Impressum";

    return (
        <title>
            {title} - gatsby.alex-benz.de - {context.language.toUpperCase()}
        </title>
    );
};

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(
            filter: {
                ns: { in: ["imprint", "privacy"] }
                language: { eq: $language }
            }
        ) {
            edges {
                node {
                    ns
                    data
                    language
                }
            }
        }
    }
`;
