import React from "react";
import { Nuxt } from "../Icons/Nuxt";
import { Gatsby } from "../Icons/Gatsby";

interface FrameworkSelectionProps {}

export const FrameworkSelection: React.FC<FrameworkSelectionProps> = () => {
    return (
        <div className="fixed bottom-0 left-0 z-50 flex w-screen items-end justify-end bg-slate-50 lg:bg-slate-50 lg:bg-opacity-5 p-1 pr-2 pt-2 dark:bg-slate-950 lg:top-0 lg:h-screen lg:w-auto lg:flex-col lg:p-0 lg:px-2 lg:pl-3">
            <div className="absolute bottom-0 left-0 h-1 w-full bg-[#663399] lg:h-full lg:w-1"></div>
            <a
                className="group relative mb-2 mr-4 grid h-8 w-8 lg:mb-4 lg:mr-0 lg:h-10 lg:w-10"
                href="https://nuxt.alex-benz.de"
            >
                <span className="absolute z-0 block h-full w-full rounded bg-white group-hover:rounded-br-none dark:bg-slate-900"></span>
                <Nuxt className="z-10 w-3/4 self-center justify-self-center text-[#00DC82]" />

                <span className="absolute left-0 -z-10 hidden self-end whitespace-nowrap rounded-r bg-[#00DC82] px-2 py-1 text-sm opacity-0 transition-all group-hover:left-full group-hover:opacity-100 lg:block">
                    nuxt.alex-benz.de
                </span>
            </a>

            <a
                className="group relative mb-2 grid h-8 w-8 lg:mb-4 lg:h-10 lg:w-10"
                href="https://gatsby.alex-benz.de"
            >
                <span className="absolute z-0 block h-full w-full rounded bg-white group-hover:rounded-br-none dark:bg-slate-900"></span>
                <Gatsby className="z-10 w-3/4 self-center justify-self-center text-slate-50 dark:text-slate-900" />

                <span className="absolute left-0 -z-10 hidden self-end whitespace-nowrap rounded-r bg-[#663399] px-2 py-1 text-sm text-slate-50 opacity-0 transition-all group-hover:left-full group-hover:opacity-100 lg:block">
                    gatsby.alex-benz.de
                </span>
            </a>
        </div>
    );
};
