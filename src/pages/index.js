import React from "react";

// Components
import Layout from "../components/Layout";

const IndexPage = () => {
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
        alt: "Lean Enterprise Consulting",
        to: "/",
      },
      nav: [
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
      ],
    },
  };

  return (
    <Layout header={data.header}>
      {/* Parallax */}
      <h1>#Parallax</h1>
      {/* Title */}
      <h1>#Title</h1>
      {/* Slider */}
      <h1>#Slider</h1>
      {/* Title */}
      <h1>#Title</h1>
      {/* Cards */}
      <h1>#Cards</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
