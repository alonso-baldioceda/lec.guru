import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/Layout";
import RichText from "../components/RichText";
import LatestPosts from "../components/LatestPosts";
import BlogPagination from "../components/BlogPagination";

// Utils
import { formatAuthorName } from "../shared/utils";

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;

  const prevPagePath = currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPagePath = `/blog/${currentPage + 1}`;

  const { allWpCategory, allWpPost } = data || {};

  return (
    <Layout>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12}>
            <div className="mt-5">
              <h1 className="mb-3">Blog</h1>
              {allWpCategory?.nodes.map((category, index) => {
                if (category.count !== null) {
                  return (
                    <Link
                      key={index}
                      to={`/blog/tags/${category.slug}`}
                      className="text-decoration-none me-2"
                    >
                      <span className="badge rounded-pill bg-rouge">
                        {category.name} [ {category.count} ]
                      </span>
                    </Link>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </Col>
          <Col md={7}>
            <hr />
            <div className="my-5">
              {allWpPost?.nodes.map((node, index) => (
                <div key={index} className="mb-5">
                  <Link to={node.slug} className="text-decoration-none">
                    <h3 className="text-black">{node.title}</h3>
                    <p className="mb-2 text-black">
                      by {formatAuthorName(node.author)} | {node.date}
                    </p>
                    <RichText text={node.excerpt} />
                    <button
                      className="btn bg-rouge rounded-pill text-white px-4 py-2 fw-bold mb-md-0 mx-0"
                      href="#"
                      role="button"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </Col>
          <Col md={4}>
            <hr />
            <div className="my-5">
              <h3 className="mb-3">Recent Posts</h3>
              <LatestPosts />
            </div>
          </Col>
          <Col xs={12}>
            <hr />
            <div className="my-5">
              <BlogPagination
                currentPage={currentPage}
                prevPagePath={prevPagePath}
                numPages={numPages}
                nextPagePath={nextPagePath}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allWpCategory {
      nodes {
        name
        slug
        count
        id
      }
    }
    allWpPost(sort: { date: DESC }, skip: $skip, limit: $limit) {
      nodes {
        id
        uri
        slug
        title
        excerpt
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          node {
            altText
            mediaItemUrl
            id
          }
        }
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
`;

export default BlogPage;
