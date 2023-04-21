import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import styled from "styled-components";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Styles
const List = styled.div`
  a {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const BlockLink = styled(Link)`
  color: ${colors.black};
  display: block;

  &:hover {
    color: ${colors.casal} !important;
  }
`;

const BlockLatestPosts = () => {
  const data = useStaticQuery(graphql`
    query BlockLatestPostsQuery {
      allWpPost(sort: { date: DESC }, limit: 5) {
        nodes {
          id
          uri
          slug
          title
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  `);

  const lastPosts = data.allWpPost.nodes;

  return (
    <div className={`${prefix}-block-latest-posts`}>
      <div className="bg-sycamore-lighter p-4 border-radius-1">
        <h3 className="mb-3 fs-5">Recent Posts</h3>
        <List>
          {lastPosts.map((node, index) => (
            <div key={index}>
              <BlockLink
                to={`/blog/${node.slug}`}
                className="d-block text-decoration-none fs-6 mb-2"
              >
                <span className="me-2">{node.title}</span>
                <i className="bi bi-arrow-right-circle"></i>
              </BlockLink>
            </div>
          ))}
        </List>
      </div>
    </div>
  );
};

export default BlockLatestPosts;
