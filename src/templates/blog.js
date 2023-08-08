import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";

// Components
import Layout from "../components/Layout";
import BlockLatestPosts from "../components/BlockLatestPosts";
import BlogPagination from "../components/BlogPagination";
import BlockList from "../components/BlockList";
import Seo from "../components/Seo.jsx";

const BlogPage = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;

  const prevPagePath = currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPagePath = `/blog/${currentPage + 1}`;

  const { allWpCategory, allWpPost } = data || {};

  return (
    <Layout>
      <Seo title="Lean Enterprise Consulting - Blog" />
      <Container>
        <Row className="justify-content-between">
          <Col xs={12}>
            <div className="mt-5">
              <h1 className="mb-5 fs-3">Blog Home</h1>
              {allWpCategory?.nodes.map((category, index) => {
                if (category.count !== null) {
                  return (
                    <Link
                      key={index}
                      to={`/blog/category/${category.slug}`}
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
              {allWpPost?.nodes && <BlockList list={allWpPost.nodes} />}
            </div>
          </Col>
          <Col md={5}>
            <hr />
            <div className="my-5">
              <BlockLatestPosts />
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
