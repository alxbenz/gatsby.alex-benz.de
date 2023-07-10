import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";

import content from "../content/content.json";
import information from "../content/information.json";
import { Content, Information } from "../types";
import { Home } from "../components/Pages/Home";
import { removeTags } from "../helper/removeTags";
import { Navigation } from "../components/Global/Navigation";

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

export const Head: HeadFC = () => (
    <>
        <html lang="de" />
        <title>
            {`${removeTags(content.intro.h2)} | ${information.contact.web}`}
        </title>
        <meta name="description" content={content.intro.p[0]} />
    </>
);

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