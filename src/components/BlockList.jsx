import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

// Components
import RichText from "../components/RichText";

// Variables
import { colors, prefix } from "../shared/styles.js";

// Utils
import { formatAuthorName } from "./../shared/utils";

// Styles
const BlockLink = styled(Link)`
  background-color: ${colors.casalLighter};
  transition: background-color 0.5s ease-out;

  &:hover {
    background-color: ${colors.casalLight};

    p {
      &.read-more {
        color: ${colors.casal} !important;
      }
    }
  }

  p {
    color: ${colors.black};
    &.read-more {
      span {
        margin-top: 2px;
      }
    }
  }
`;

const BlockList = ({ list }) => {
  return (
    <div className={`${prefix}-block-list`}>
      {list.map((blog, index) => (
        <div key={index} className="mb-5">
          <BlockLink
            to={`/blog/${blog.slug}`}
            className="text-decoration-none d-block p-4 border-radius-1"
          >
            <h3 className="text-black fs-5">{blog.title}</h3>
            <p className="mb-2 text-black small">
              by {formatAuthorName(blog.author)} | {blog.date}
            </p>
            <RichText text={blog.excerpt} />
            <p className="mb-0 read-more d-flex">
              <span className="me-2 small">Read more</span>{" "}
              <i className="bi bi-arrow-right-circle"></i>
            </p>
          </BlockLink>
        </div>
      ))}
    </div>
  );
};

export default BlockList;
