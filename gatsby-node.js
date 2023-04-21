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

  const categoriesQueryResult = await graphql(`
    query {
      allWpCategory {
        nodes {
          slug
        }
      }
    }
  `);

  await Promise.all(
    categoriesQueryResult.data.allWpCategory.nodes.map(async (category) => {
      const categoryQueryResult = await graphql(`
      query {
        wpCategory(slug: { eq: "${category.slug}" }) {
          name
          slug
          posts {
            nodes {
              title
              excerpt
              slug
              date(formatString: "MMMM DD, YYYY")
              author {
                node {
                  avatar {
                    url
                  }
                  firstName
                  lastName
                }
              }
            }
          }
        }
      }
    `);

      const categoryData = categoryQueryResult.data.wpCategory;
      const postsData = categoryData.posts.nodes;

      const postsPerPage = 5;
      const numPages = Math.ceil(postsData.length / postsPerPage);

      Array.from({ length: numPages }).forEach((_, index) => {
        createPage({
          path:
            index === 0
              ? `blog/category/${categoryData.slug}`
              : `blog/category/${categoryData.slug}/${index + 1}`,
          component: require.resolve("./src/templates/category.js"),
          context: {
            slug: categoryData.slug,
            category: categoryData,
            posts: postsData.slice(
              index * postsPerPage,
              (index + 1) * postsPerPage
            ),
            numPages,
            currentPage: index + 1,
          },
        });
      });
    })
  );
};
