import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

import content from "../content/content.json";
import information from "../content/information.json";
import { Content, Information, Meta } from "../types";
import { Home } from "../components/Pages/Home";
import { Navigation } from "../components/Global/Navigation";
import { PageContext } from "gatsby-plugin-react-i18next/dist/types";
import metaJson from "../content/meta.json";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <>
            <Navigation />
            <Home
                content={content as Content}
                information={information as Information}
            />
        </>
    );
};

export default IndexPage;

export const Head: HeadFC = (props) => {
    const context = props.pageContext as PageContext;
    const meta = metaJson as Meta;

    const title = meta.home[context.language].title;
    const description = meta.home[context.language].description;

    return (
        <>
            <html lang={context.language} />
            <title>
                {title} - gatsby.alex-benz.de - {context.language.toUpperCase()}
            </title>
            <meta name="description" content={description} />
        </>
    );
};

export const query = graphql`
    query ($language: String!) {
        locales: allLocale(filter: { language: { eq: $language } }) {
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
