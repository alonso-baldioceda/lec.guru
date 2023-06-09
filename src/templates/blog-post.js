import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { colors, prefix } from "./../shared/styles.js";

// Components
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";
import Mask from "../components/Mask";
import BlockLatestPosts from "../components/BlockLatestPosts.jsx";

// Utils
import { formatAuthorName } from "./../shared/utils.js";

// Styles
const StyledBlogPost = styled.div``;

const Panel = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50%;
`;

const BlogPost = ({ data }) => {
  const { wpPost } = data || {};
  const { title, content, date, featuredImage, author, categories } =
    wpPost || {};

  const { nodes } = categories || {};
  const { name: categoryName, slug: categorySlug } = nodes[0] || {};

  console.log("nodes", nodes[0].name);

  return (
    <Layout>
      <StyledBlogPost className={`${prefix}-blog-post`}>
        <div className="position-relative" style={{ height: "300px" }}>
          {featuredImage && (
            <BackgroundImage src={featuredImage.node.mediaItemUrl} />
          )}
          <Container>
            <Row>
              <Col xs={12}>
                <Panel>
                  <div className="position-relative border-radius-1 overflow-hidden">
                    <Mask opacity={90} bgColor={colors.rouge} />
                    <div className="p-4">
                      <h1 className="text-white fs-2 mb-2">{title}</h1>
                      <p className="text-white mb-3">
                        by {formatAuthorName(author)} | {date}
                      </p>
                      {categories?.nodes.map((category, index) => {
                        return (
                          <span
                            key={index}
                            className="badge rounded-pill bg-sycamore px-2 me-2 mb-2"
                          >
                            {category.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </Panel>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="my-5">
          <Container>
            <Row className="justify-content-between">
              <Col xs={12}>
                <div className="mb-4">
                  <Link className="text-uppercase" to="/blog">
                    Blog Home
                  </Link>
                  <span className="mx-2">|</span>
                  <span className="text-uppercase">
                    <Link to={`/blog/category/${categorySlug}`}>
                      {categoryName}
                    </Link>
                  </span>
                </div>
              </Col>
              <Col md={7}>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Col>
              <Col md={4}>
                <div className="mb-5">
                  <BlockLatestPosts />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </StyledBlogPost>
    </Layout>
  );
};

// TODO: excerpt(pruneLength: 250)

export const query = graphql`
  query ($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
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
      featuredImage {
        node {
          altText
          mediaItemUrl
          id
          publicUrl
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
    }
  }
`;
export default BlogPost;
