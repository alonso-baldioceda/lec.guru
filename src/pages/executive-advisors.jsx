import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// Variables
import { colors, prefix } from "./../shared/styles.js";

// Components

import Layout from "../components/Layout";
import CardAdvisors from "../components/CardAdvisors";

const StyledExecutiveAdvisorsPage = styled.div``;

const ExecutiveAdvisorsPage = ({ data }) => {
  const { teamImages, allDataJson } = data || {};
  const { edges } = allDataJson;
  const { node } = edges[0];
  const { executiveAdisorsPage } = node;
  const { cards } = executiveAdisorsPage;

  cards.forEach((item, index) => {
    const image = getImage(teamImages.edges[index]?.node.childImageSharp);
    item.image = image;
  });
  return (
    <StyledExecutiveAdvisorsPage>
      <Layout>
        <div className={`${prefix}-teamAdvisors`}>
          <Container className="pt-auto pt-lg-auto">
            <Row className="my-4 my-lg-5 ps-5 me-5">
              {cards.map((advisor, index) => (
                <Col sm={6} key={index} className="mb-4 mb-lg-5">
                  <CardAdvisors
                    name={advisor.name}
                    title={advisor.title}
                    bio={advisor.bio}
                    image={advisor.image}
                    social={advisor.social}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Layout>
    </StyledExecutiveAdvisorsPage>
  );
};

export default ExecutiveAdvisorsPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query {
    teamImages: allFile(
      filter: {
        extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        relativeDirectory: { eq: "team" }
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
          }
          executiveAdisorsPage {
            cards {
              name
              bio
              title
              social {
                heading
                links {
                  icon
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;
