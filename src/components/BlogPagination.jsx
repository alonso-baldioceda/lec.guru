import React from "react";
import { Link } from "gatsby";

const BlogPagiation = ({ currentPage, prevPagePath, nextPagePath, numPages }) =>
  numPages > 1 ? (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <Link
            to={prevPagePath}
            className="page-link text-casal"
            aria-label="Previous"
          >
            <span className="sr-only small">Previous</span>
          </Link>
        </li>
        {Array.from({ length: numPages }).map((_, i) => (
          <li className="page-item" key={`pagination-number${i + 1}`}>
            <Link
              to={`/blog/${i === 0 ? "" : i + 1}`}
              className="page-link text-casal"
            >
              {i + 1}
            </Link>
          </li>
        ))}
        <li
          className={`page-item ${currentPage === numPages ? "disabled" : ""}`}
        >
          <Link
            to={nextPagePath}
            className="page-link text-casal"
            aria-label="Next"
          >
            <span className="sr-only small">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  ) : null;

export default BlogPagiation;
