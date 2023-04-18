const path = require("path");
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");

  const result = await graphql(`
    {
      allWpPost {
        totalCount
        nodes {
          id
          uri
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const postsPerPage = 5;
  const numPages = Math.ceil(result.data.allWpPost.totalCount / postsPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const posts = result.data.allWpPost.nodes;
  const postTemplate = path.resolve("./src/templates/blog-post.js");

  posts.forEach((post, i) => {
    const previous = i === posts.length - 1 ? null : posts[i + 1].previous;
    const next = i === 0 ? null : posts[i - 1].next;

    createPage({
      path: `/blog${post.uri}`,
      component: slash(postTemplate),
      context: {
        id: post.id,
        previous,
        next,
      },
    });
  });
};
