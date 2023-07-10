import type { GatsbyConfig } from "gatsby";
const { languages, defaultLanguage } = require('./languages');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GITHUB_TOKEN, GITHUB_USER } = process.env;
const query = require('./src/api/github-api.ts').latestContributionsQuery;


const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby.alexbenz.dev`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`
      }
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        languages,
        defaultLanguage,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: 'common',
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          }
        },
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: GITHUB_TOKEN,
        graphQLQuery: query,
        variables: {
          userName: GITHUB_USER
        }
      }
    }
  ]
};

export default config;
