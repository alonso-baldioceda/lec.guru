import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

// Variables
// import { color, prefix } from "./../shared/styles.js";

// Components

import Layout from "../components/Layout";

const StyledServicesPage = styled.div``;

const ServicesPage = ({ data }) => {
  const { allDataJson } = data || {};
  const { edges } = allDataJson || {};
  const { node } = edges[0] || {};
  const { header, footer } = node || {};

  return (
    <StyledServicesPage>
      <Layout header={header} footer={footer}>
        Services!!
      </Layout>
    </StyledServicesPage>
  );
};

export default ServicesPage;

export const Head = () => <title>Services</title>;

export const query = graphql`
  query {
    allDataJson {
      edges {
        node {
          about {
            heading
            mission {
              heading
              text
            }
            company {
              heading
              text
            }
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
          hero {
            cta {
              label
              link
            }
            heading
            img
            small
            text
          }
          services {
            cards {
              cta
              heading
              icon
              link
              text
            }
            heading
            text
          }
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
        }
      }
    }
  }
`;
