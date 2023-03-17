import React from "react";
// Variables
import { prefix } from "./../../shared/styles.js";

// Components
import NavItem from "./NavItem";

const Blog = ({ posts }) => (
  <div className={`${prefix}-footer-blog-footer`}>
    <ul>
      {posts.map((item, index) => (
        <li key={index}>
          <NavItem to={item.link} label={item.title} />
        </li>
      ))}
    </ul>
  </div>
);

export default Blog;
