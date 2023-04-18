import React from "react";
import { Link } from "gatsby";

const BlogPagiation = ({
  currentPage,
  prevPagePath,
  nextPagePath,
  numPages,
}) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <Link to={prevPagePath} className="page-link" aria-label="Previous">
          <span className="sr-only">Previous</span>
        </Link>
      </li>
      {Array.from({ length: numPages }).map((_, i) => (
        <li className="page-item" key={`pagination-number${i + 1}`}>
          <Link to={`/blog/${i === 0 ? "" : i + 1}`} className="page-link">
            {i + 1}
          </Link>
        </li>
      ))}
      <li className={`page-item ${currentPage === numPages ? "disabled" : ""}`}>
        <Link to={nextPagePath} className="page-link" aria-label="Next">
          <span className="sr-only">Next</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default BlogPagiation;
