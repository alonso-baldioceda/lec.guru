import React, { useState } from "react";
import styled from "styled-components";
import { prefix, colors } from "./../shared/styles.js";
import classnames from "classnames";

// Styles
const StyledCollapsableItemList = styled.li`
  border-bottom: 1px solid ${colors.sycamore};

  &:last-child {
    border-bottom: none;
  }

  button {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    cursor: pointer;
    font: inherit;
    outline: inherit;
    padding: 0;
    text-decoration: none;
    width: 100%;

    .collapsable {
      color: ${colors.rouge};
      font-size: 15px;
      height: 0;

      &.open {
        height: auto;
        font-size: 15px;
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
      <button className="py-4 d-block" onClick={handleClick}>
        <div className="d-flex align-items-start justify-content-between">
          <span className="mb-0 text-sycamore font-bold me-3 text-start">
            {item.title}
          </span>
          {isExpanded ? (
            <i className="bi bi-arrow-down text-sycamore"></i>
          ) : (
            <i className="bi bi-arrow-right text-sycamore"></i>
          )}
        </div>

        {isExpanded && (
          <p
            className={classnames("mt-3 mb-0 collapsable text-start", {
              open: isExpanded,
            })}
          >
            {item.description}
          </p>
        )}
      </button>
    </StyledCollapsableItemList>
  );
};

export default CollapsableItemList;
