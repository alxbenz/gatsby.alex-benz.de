// gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions;

    createRedirect({
        fromPath: `/`,
        toPath: `/de`,
    });
}
