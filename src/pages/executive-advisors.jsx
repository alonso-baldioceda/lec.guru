import React from "react";
import styled from "styled-components";
<<<<<<< Updated upstream
=======
import { Container, Row, Col } from "react-bootstrap";
>>>>>>> Stashed changes

// Variables
// import { colors, prefix } from "./../shared/styles.js";

// Components

import Layout from "../components/Layout";

const StyledExecutiveAdvisorsPage = styled.div``;

const ExecutiveAdvisorsPage = () => {
  const nav = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Services",
      link: "/services",
    },
    {
      label: "Executive Advisors",
      link: "/executive-advisors",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "Blog",
      link: "/blog",
    },
  ];

  const data = {
    header: {
      top: {
        phone: { label: "Call now", href: "+19542583117", icon: "call" },
        email: {
          label: "contact@lec.guru",
          href: "contact@lec.guru",
          icon: "envelope",
        },
      },
      brand: {
        icon: "logo",
        alt: "Lean Enterprise Consulting",
        to: "/",
      },
      nav: nav,
    },
    footer: {
      nav: { heading: "Pages", nav: nav },
      social: {
        heading: "Follow Us",
        links: [
          {
            icon: "facebook",
            link: "https://www.facebook.com/",
          },
          {
            icon: "linkedin",
            link: "https://www.linkedin.com/",
          },
          {
            icon: "twitter",
            link: "https://twitter.com/",
          },
          {
            icon: "instagram",
            link: "https://www.instagram.com/",
          },
        ],
      },
      contact: {
        heading: "Contact Us",
        address: "Fort Lauderdale, FL. USA",
        phone: "Phone: +954-258-3117",
        email: "Email: contact@lec.guru",
      },
      copyright:
        "© 2008 - 2022 Lean Enterprise Consulting, Inc. | All Rights Reserved.",
    },
  };

  return (
    <StyledExecutiveAdvisorsPage>
<<<<<<< Updated upstream
      <Layout header={data.header} footer={data.footer}>
        hola!!
=======
      <Layout header={header} footer={footer}>
        <div className={`${prefix}-team-advisors`}>
          <div className="my-4 my-lg-5">
            <Container>
              <Row>
                {cards.map((advisor, index) => (
                  <Col md={6} key={index} className="mb-4 mb-lg-5">
                    <CardAdvisors
                      key={index}
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
        </div>
>>>>>>> Stashed changes
      </Layout>
    </StyledExecutiveAdvisorsPage>
  );
};

export default ExecutiveAdvisorsPage;

export const Head = () => <title>Home Page</title>;
<<<<<<< Updated upstream
=======

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
>>>>>>> Stashed changes
