import React, { useState } from "react";
import styled from "styled-components";
import { prefix, color } from "./../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledCollapsableItemList = styled.li`
  border-bottom: 1px solid ${color.sycamore};

  &:last-child {
    border-bottom: none;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    .collapsable {
      color: ${color.rouge};
      font-size: 15px;
      height: 0;

      &.open {
        height: auto;
      }
    }
  }
`;

const CollapsableItemList = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledCollapsableItemList className={`${prefix}-collapsable-item-list`}>
      <a className="py-4 d-block" onClick={handleClick}>
        <div className="d-flex align-items-center justify-content-between">
          <p className="mb-0 text-sycamore font-bold me-3">{item.title}</p>

          {isExpanded ? (
            <i className="bi bi-arrow-down text-sycamore"></i>
          ) : (
            <i className="bi bi-arrow-right text-sycamore"></i>
          )}
        </div>

        {isExpanded && (
          <p
            className={classnames("mt-3 mb-0 collapsable", {
              open: isExpanded,
            })}
          >
            {item.description}
          </p>
        )}
      </a>
    </StyledCollapsableItemList>
  );
};

export default CollapsableItemList;
