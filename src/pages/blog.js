import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/Layout";
import RichText from "../components/RichText";

// Utils
import { formatAuthorName, getRecentPosts } from "./../shared/utils";

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, totalPages, basePath } = pageContext;

  const prevPagePath =
    currentPage === 2 ? `${basePath}` : `${basePath}/${currentPage - 1}`;
  const nextPagePath = `${basePath}/${currentPage + 1}`;

  // TODO: remove blogImages from query
  const { allWpCategory, allWpPost } = data || {};
  // const lastPosts = getRecentPosts(allWpPost);

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
              {allWpPost?.nodes.map((node, index) => {
                return (
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
                );
              })}
            </div>
          </Col>
          <Col md={4}>
            <hr />
            <div className="my-5">
              <h3 className="mb-3">Recent Posts</h3>
              {/* {lastPosts.map((node, index) => {
                return (
                  <div key={index} className="mb-3">
                    <Link to={node.slug} className="text-decoration-none">
                      <h6 className="text-black">{node.title}</h6>
                    </Link>
                  </div>
                );
              })} */}
            </div>
          </Col>
          <Col xs={12}>
            <hr />
            <div className="my-5">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={prevPagePath}
                      className="page-link"
                      aria-label="Previous"
                    >
                      <span className="sr-only">Previous</span>
                    </Link>
                  </li>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <li className="page-item" key={`pagination-number${i + 1}`}>
                      <Link
                        to={`/blog/${i === 0 ? "" : i + 1}`}
                        className="page-link"
                      >
                        {i + 1}
                      </Link>
                    </li>
                  ))}
                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    <Link
                      to={nextPagePath}
                      className="page-link"
                      aria-label="Next"
                    >
                      <span className="sr-only">Next</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
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
