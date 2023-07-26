import React from "react";
import { GradientBall } from "./GradientBall";
import { Contributions } from "./Contributions";
import { Logo } from "./Logo";

import loadable from "@loadable/component";
import { FrameworkSelection } from "./FrameworkSelection";

const Background = loadable(() => import("./Background"));

interface ContentSplitProps {
    left?: React.ReactNode;
    right?: React.ReactNode;
}

export const ContentSplit: React.FC<ContentSplitProps> = ({
    left = <></>,
    right = <></>,
}) => {
    return (
        <>
            <FrameworkSelection />
            <div className="relative text-white md:w-1/2 md:fixed md:h-screen flex items-center justify-center md:justify-end overflow-hidden">
                <div className="background bg-gradient-to-br from-stone-800 to-slate-900 absolute w-full h-full -z-20" />
                <div className="absolute h-full w-full">
                    <Background />
                    <GradientBall />
                </div>
                <aside className="px-6 max-w-lg lg:max-w-sm w-full relative lg:mr-24 pt-20 pb-6 min-h-[16rem] md:max-h-screen overflow-auto">
                    <div className="flex justify-start items-center">
                        <div className="h-16 w-16">
                            <Logo />
                        </div>
                        <span className="ml-6 font-semibold text-lg mb-4 tracking-wid">
                            alexbenz.dev
                        </span>
                    </div>
                    {left}
                </aside>
            </div>
            <div className="relative md:w-1/2 md:left-1/2 flex justify-center md:justify-start dark:bg-slate-900 dark:text-white md:min-h-screen h-full">
                <Contributions />
                <main className="relative max-w-lg [&>section+section]:border-t-2 [&>section+section]:border-yellow-200 [&>section+section]:dark:border-slate-800 flex flex-col justify-center">
                    {right}
                </main>
            </div>
        </>
    );
};
