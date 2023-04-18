import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";

const LatestPosts = () => {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
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
    <div>
      {lastPosts.map((node, index) => (
        <div key={index} className="mb-3">
          <Link to={node.slug} className="text-decoration-none">
            <h6 className="text-black">{node.title}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts;
