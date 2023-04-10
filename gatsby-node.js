const path = require("path");

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   createTypes(`
//     type BlogPost implements Node {
//       title: String!
//       slug: String!
//       date: Date! @dateformat
//       content: String!
//     }
//   `);
// };

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve("./src/templates/blog-post.js");

  const result = await graphql(`
    query MyQuery {
      allDataJson {
        edges {
          node {
            blogpage {
              posts {
                slug
              }
            }
          }
        }
      }
    }
  `);

  const posts = JSON.parse(
    JSON.stringify(result.data.allDataJson.edges[0].node.blogpage.posts)
  );

  posts.forEach(({ slug }) => {
    createPage({
      path: `/blog/${slug}`,
      component: blogPostTemplate,
      context: {
        slug: slug,
      },
    });
  });
};
