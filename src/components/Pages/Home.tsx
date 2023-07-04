import React from "react";
import { Content, Information } from "../../types";
import { Navigation } from "../Global/Navigation";
import { Intro } from "../Home/Intro";
import { Section } from "../Home/Section";
import { Skills } from "../Home/Skills";
import { Testimonials } from "../Home/Testimonials";
import { Contact } from "../Home/Contact";

interface HomeProps {
    content: Content;
    information: Information;
}

export const Home: React.FC<HomeProps> = ({ content, information }) => {
    const skillSection = content.sections.find(
        (section) => section.id === "skills"
    );
    const testimonialsSection = content.sections.find(
        (section) => section.id === "testimonials"
    );

    const contactSections = content.sections.find(
        (section) => section.id === "contact"
    );

    return (
        <div className="relative text-sm/6 ">
            <Navigation />
            <Intro
                intro={content.intro}
                information={information as Information}
            />
            <div className="relative md:w-1/2 md:left-1/2 flex justify-center lg:justify-start dark:bg-slate-950 dark:text-white">
                <main className="relative max-w-lg [&>section+section]:border-t-2 [&>section+section]:border-yellow-200 [&>section+section]:dark:border-slate-800">
                    {skillSection && (
                        <Section
                            h2={skillSection.h2}
                            p={skillSection.p}
                            sub={skillSection.sub}
                        >
                            <Skills skills={content.skills} />
                        </Section>
                    )}
                    {testimonialsSection && (
                        <Section
                            h2={testimonialsSection.h2}
                            p={testimonialsSection.p}
                            sub={testimonialsSection.sub}
                        >
                            <Testimonials testimonials={content.testimonials} />
                        </Section>
                    )}
                    {contactSections && (
                        <Section
                            h2={contactSections.h2}
                            p={contactSections.p}
                            sub={contactSections.sub}
                        >
                            <Contact information={information as Information} />
                        </Section>
                    )}
                </main>
            </div>
        </div>
    );
};
