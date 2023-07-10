import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navigation } from "../components/Global/Navigation";
import { ContentSplit } from "../components/Global/ContentSplit";
import { Section } from "../components/Global/Section";

const NotFoundPage: React.FC<PageProps> = () => {
    return (
        <div>
            <div className="relative text-sm/6 min-h-screen">
                <Navigation />
                <ContentSplit
                    right={
                        <div className="flex items-center">
                            <Section h2="404" p={["Lost???"]} sub="Lost?" />
                        </div>
                    }
                />
            </div>
        </div>
    );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>;
