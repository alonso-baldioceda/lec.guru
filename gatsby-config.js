/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteDescription =
  "Unlock Efficiency and Excellence with Our LEAN Consultancy. Streamline Operations, Minimize Waste, and Elevate Performance through our Expert Guidance. Embrace LEAN Principles for a Leaner, Smarter Future.";
const siteAuthor = "";
const siteImage = "images/icon.png";
const siteKeywords = [
  "Continuous Improvement",
  "Waste Reduction",
  "Value Stream Mapping",
  "Kaizen",
  "Just-In-Time (JIT)",
  "Kanban",
  "Standardized Work",
  "Pull System",
  "5S Methodology",
  "Single-Piece Flow",
  "Poka-Yoke (Mistake Proofing)",
  "Cross-Functional Teams",
  "Total Productive Maintenance (TPM)",
  "Visual Management",
  "Customer Focus",
];

module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: `Lean Enterprise Consulting`,
    siteUrl: `https://lec.guru`,
    description: siteDescription,
    author: siteAuthor,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://www.blog.lec.guru/graphql`,
        // process.env.NODE_ENV === "production"
        //   ? `https://www.blog.lec.guru/graphql`
        //   : `http://lec.local/graphql`,
        schema: {
          perPage: 5,
          requestConcurrency: 5,
          previewRequestConcurrency: 5,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/`,
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
