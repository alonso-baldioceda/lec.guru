import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Masonry from "react-masonry-css";

// Variables
import { colors, prefix } from "./../shared/styles.js";

const StyledMasonry = styled.div`
  .my-masonry-grid {
    display: flex;
    margin-left: -30px;
    width: auto;
  }
  .my-masonry-grid_column {
    background-clip: padding-box;
    padding-left: 30px;
  }

  .my-masonry-grid_column > div {
    background: ${colors.sycamore};
    margin-bottom: 30px;
  }
`;

const ServicesPage = ({ children }) => {
  const masonryBreakpoint = {
    default: 3,
    1440: 3,
    1200: 3,
    992: 2,
    768: 1,
  };

  return (
    <StyledMasonry className={`${prefix}-masonry`}>
      <Masonry
        breakpointCols={masonryBreakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {children}
      </Masonry>
    </StyledMasonry>
  );
};

export default ServicesPage;

export const Head = () => <title>Services</title>;

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "unclasified/12.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 3000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    blogImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "unclasified/blog" }
      }
      sort: { name: ASC }
    ) {
      totalCount
      edges {
        node {
          base
          name
          id
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
      }
    }
    allDataJson {
      edges {
        node {
          common {
            team {
              cards {
                img
                job
                link
                name
                social {
                  heading
                  links {
                    icon
                    link
                  }
                }
                text
              }
              heading
            }
            blog {
              heading
              slider {
                nodes {
                  cta {
                    label
                    link
                  }
                  heading
                  img {
                    alt
                    src
                  }
                }
              }
              text
            }
            footer {
              contact {
                address
                email
                heading
                phone
              }
              copyright
              nav {
                heading
                nav {
                  label
                  link
                }
              }
              social {
                heading
                links {
                  icon
                  link
                }
              }
            }
            header {
              brand {
                alt
                icon
                to
              }
              nav {
                label
                link
              }
              top {
                email {
                  href
                  icon
                  label
                }
                phone {
                  href
                  icon
                  label
                }
              }
            }
          }
          servicespage {
            services {
              details {
                details {
                  description
                  title
                }
                introduction
                title
              }
              subtitle
              title
            }
          }
        }
      }
    }
  }
`;
