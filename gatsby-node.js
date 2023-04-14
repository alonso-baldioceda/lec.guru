const path = require("path");
const { slash } = require(`gatsby-core-utils`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/pages/blog.js");

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

  const postsPerPage = 5;
  const totalPages = Math.ceil(result.data.allWpPost.totalCount / postsPerPage);

  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
        totalPages: totalPages,
        basePath: "/blog",
      },
    });
  });

  const postTemplate = path.resolve("./src/templates/blog-post.js");

  const posts = result.data.allWpPost.nodes;

  posts.forEach((post, i) => {
    createPage({
      // will be the url for the page
      path: `/blog${post.uri}`,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this post's data.
      context: {
        id: post.id,
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
        totalPages: totalPages,
        basePath: "/blog",
      },
    });
  });
};
