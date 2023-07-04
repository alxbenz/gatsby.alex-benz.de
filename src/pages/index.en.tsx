import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import content from "../resources/content.en.json";
import information from "../resources/information.json";
import { Content, Information } from "../types";
import { Home } from "../components/Pages/Home";
import { removeTags } from "../helper/removeTags";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Home
            content={content as Content}
            information={information as Information}
        />
    );
};

export default IndexPage;

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <title>
            {`${removeTags(content.intro.h2)} | ${information.contact.web}`}
        </title>
        <meta name="description" content={content.intro.p[0]} />
    </>
);
