import React from "react";
// import { graphql } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const BlogPost = ({ data }) => {
  // const post = data.blogPostsJson;

  return (
    <Container>
      <Row>
        <Col>
          hi!
          {/* <h1>{post.title}</h1>
          <p>{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
        </Col>
      </Row>
    </Container>
  );
};

// TODO: excerpt(pruneLength: 250)

// node {
//   excerpt(pruneLength: 250)
//   id

// export const query = graphql`
//   query ($slug: String!) {
//     allDataJson {
//       edges {
//         node {
//           blogpage {
//             posts {
//               title
//               date(formatString: "MMMM DD, YYYY")
//               content
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default BlogPost;

// export const query = graphql`
//   query PortfolioItemQUery($slug: String!) {
//     item: contentfulPortfolio(slug: { eq: $slug }) {
//       description {
//         description
//       }
//       gallery {
//         id
//         localFile {
//           childImageSharp {
//             gatsbyImageData(width: 900, quality: 50)
//           }
//         }
//         title
//       }
//       name
//       related {
//         ...PortfolioCard
//       }
//       summary
//       thumbnail {
//         localFile {
//           publicURL
//         }
//       }
//     }
//   }
// `;
