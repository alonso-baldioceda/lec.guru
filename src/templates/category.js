import React from "react";
import { graphql, Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

// Components
import Layout from "../components/Layout";
import BlockLatestPosts from "../components/BlockLatestPosts";
import BlockList from "../components/BlockList";
import BlogPagination from "../components/BlogPagination";

const CategoryPage = ({ data, pageContext }) => {
  const { category, posts, currentPage, numPages } = pageContext;
  const prevPagePath = currentPage === 2 ? `/blog` : `/blog/${currentPage - 1}`;
  const nextPagePath = `/blog/${currentPage + 1}`;

  const { allWpCategory } = data || {};

  return (
    <Layout>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12}>
            <div className="mt-5">
              <div className="mb-4">
                <Link className="text-uppercase" to="/blog">
                  Blog Home
                </Link>
                <span className="mx-2">|</span>
                <span className="text-uppercase">{category.name}</span>
              </div>
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
          <Col xs={12} lg={7}>
            <hr />
            <div className="my-5">
              <BlockList list={posts} />
              {/* <div>
                {Array.from({ length: numPages }).map((_, index) => (
                  <Link
                    key={`pagination-number${index + 1}`}
                    to={`blog/${category.slug}/${index === 0 ? "" : index + 1}`}
                  >
                    {index + 1}
                  </Link>
                ))}
              </div> */}
              <BlogPagination
                currentPage={currentPage}
                prevPagePath={prevPagePath}
                numPages={numPages}
                nextPagePath={nextPagePath}
              />
            </div>
          </Col>
          <Col md={4}>
            <hr />
            <div className="my-5">
              <BlockLatestPosts />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query {
    allWpCategory {
      nodes {
        name
        slug
        count
        id
      }
    }
  }
`;

export default CategoryPage;
