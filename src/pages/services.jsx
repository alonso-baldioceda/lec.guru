import React from "react";
import styled from "styled-components";

// Variables
// import { color, prefix } from "./../shared/styles.js";

// Components

import Layout from "../components/Layout";

const StyledServicesPage = styled.div``;

const ServicesPage = () => {
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
    <StyledServicesPage>
      <Layout header={data.header} footer={data.footer}>
        hola!!
      </Layout>
    </StyledServicesPage>
  );
};

export default ServicesPage;

export const Head = () => <title>Home Page</title>;
