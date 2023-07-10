import React, { Fragment } from "react";
import { graphql, useStaticQuery } from "gatsby";
import giteaContributions from "../../resources/gitea-contributions-23-07-05.json";
import gitlabContributions from "../../resources/gitlab-contributions-23-07-05.json";
import classNames from "classnames";
import { transformData as transformGiteaData } from "../../helper/giteaTransformation";
import { transformData as transformGitHubData } from "../../helper/githubTransformation";
import { transformData as transformGitlabData } from "../../helper/gitlabTransformation";
import { mergeContributions } from "../../helper/mergeContributions";

interface ContributionsProps {}

export const Contributions: React.FC<ContributionsProps> = () => {
    const data = useStaticQuery(graphql`
        query MyQuery {
            allGithubData {
                nodes {
                    data {
                        user {
                            contributionsCollection {
                                contributionCalendar {
                                    weeks {
                                        contributionDays {
                                            date
                                            contributionCount
                                        }
                                    }
                                    totalContributions
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    const contributions =
        data.allGithubData.nodes[0].data.user.contributionsCollection
            .contributionCalendar;

    const transformedGitHubData = transformGitHubData(contributions);
    const transformedGiteaData = transformGiteaData(giteaContributions);
    const transformedGitlabData = transformGitlabData(gitlabContributions);

    const mergedContributions = mergeContributions(
        transformedGitHubData,
        transformedGiteaData,
        transformedGitlabData
    );

    return (
        <div className="absolute -translate-x-20 pl-20 h-full overflow-hidden z-10 left-0">
            {mergedContributions.reverse().map((contributions, index) => {
                const classes = classNames("h-1 md:h-2 rounded-r-sm", {
                    "bg-gray-200 dark:bg-slate-600 w-[2px] md:w-[3px] lg:w-[4px]":
                        contributions.contributions === 0,
                    "bg-purple-300 w-[3px] md:w-[4px] lg:w-[6px]":
                        contributions.contributions > 0 &&
                        contributions.contributions <= 2,
                    "bg-purple-400 w-[4px] md:w-[5px] lg:w-[8px]":
                        contributions.contributions > 2 &&
                        contributions.contributions <= 4,
                    "bg-purple-500 w-[5px] md:w-[6px] lg:w-[10px]":
                        contributions.contributions > 4 &&
                        contributions.contributions <= 6,
                    "bg-purple-600 w-[6px] md:w-[7px] lg:w-[12px]":
                        contributions.contributions > 6,
                });
                return (
                    <Fragment key={index}>
                        {index % 90 === 0 && (
                            <div className="text-slate-500 text-[8px] -translate-x-[120%] h-0">
                                {contributions.date}
                            </div>
                        )}
                        <div
                            className={classes}
                            title={
                                contributions.date +
                                " - " +
                                contributions.contributions
                            }
                        ></div>
                    </Fragment>
                );
            })}
        </div>
    );
};
