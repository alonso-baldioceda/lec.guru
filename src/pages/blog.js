import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/Layout";

const BlogPage = ({ data }) => {
  //   const posts = data.allBlogPost.edges;

  const { blogImages, allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const node = edges[0].node;
  const { common, blogpage } = node || {};
  const { header, footer } = common || {};
  const { posts } = blogpage || {};

  return (
    <Layout header={header} footer={footer}>
      <Container>
        <Row>
          <Col>
            <h1>Blog</h1>
            {posts?.map((node, index) => {
              return (
                <div key={index}>
                  <Link to={node.slug}>
                    <h2>{node.title}</h2>
                  </Link>
                  <p>{node.content}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    blogImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "unclasified/blog" }
      }
      sort: { name: ASC }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
    }
    allDataJson {
      edges {
        node {
          common {
            header {
              brand {
                alt
                icon
                to
              }
              nav {
                label
                link
              }
              top {
                email {
                  href
                  icon
                  label
                }
                phone {
                  href
                  icon
                  label
                }
              }
            }
            footer {
              contact {
                address
                email
                heading
                phone
              }
              copyright
              nav {
                heading
                nav {
                  label
                  link
                }
              }
              social {
                heading
                links {
                  icon
                  link
                }
              }
            }
          }
          blogpage {
            posts {
              content
              date
              title
              slug
            }
          }
        }
      }
    }
  }
`;

export default BlogPage;
