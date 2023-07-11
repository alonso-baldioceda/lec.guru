import React from "react";
import { useTranslation } from "react-i18next";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import BrickWall from "../components/BrickWall";

// Variables
import { prefix } from "./../shared/styles.js";

// Components
import Layout from "../components/Layout";
import CardV5 from "../components/CardV5";

const StyledExecutiveAdvisorsPage = styled.div``;

const ExecutiveAdvisorsPage = ({ data }) => {
  const { t } = useTranslation();

  const trCommon = t("common", {
    returnObjects: true,
  });

  const { team } = trCommon;
  const { executives } = team;

  const { teamImages } = data || {};

  executives.forEach((item, index) => {
    const image = getImage(teamImages.edges[index]?.node.childImageSharp);
    item.image = image;
  });

  const masonryBreakpoint = {
    default: 3,
    1440: 3,
    1200: 1,
    992: 2,
    768: 1,
  };

  return (
    <StyledExecutiveAdvisorsPage>
      <Layout>
        <div className={`${prefix}-teamAdvisors`}>
          <Container className="pt-auto pt-lg-auto">
            <Row className="my-4 my-lg-5">
              <Col xs={12}>
                <BrickWall conf={masonryBreakpoint}>
                  {executives.map((advisor, index) => (
                    <CardV5 key={index} {...advisor} />
                  ))}
                </BrickWall>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </StyledExecutiveAdvisorsPage>
  );
};

export default ExecutiveAdvisorsPage;

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
  }
`;
