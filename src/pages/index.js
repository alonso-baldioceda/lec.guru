import React from "react";

// Components
import Layout from "../components/Layout";

const IndexPage = () => {
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
        alt: "Lean Enterprise Consulting",
        to: "/",
      },
      nav: nav,
    },
    footer: {
      business: {
        heading: "Business Hours",
        days: {
          label: "Opening Days",
          value: "Mon - Fri: 8am to 5pm",
        },
        vacations: {
          label: "Vacations",
          value: "Sundays - Official Holidays",
        },
      },
      contact: {
        heading: "Contact",
        phone: { label: "Telephone", value: "954-258-3117" },
        email: { label: "E-mail", value: "contact@lec.guru" },
      },
      nav: { heading: "Pages", nav: nav },
      blog: {
        heading: "Recent Posts",
        posts: [
          {
            title: "Living our own Lives!",
            link: "/blog/living-our-own-lives",
            date: "April 1, 2020",
          },
          {
            title: "Virtual Inspection",
            link: "/blog/virtual-inspection",
            date: "March 1, 2020",
          },
          {
            title:
              "It doesn’t matter how many times you fail, it only matters that you don’t the last time you try.",
            link: "/blog/it-doesnt-matter",
            date: "February 1, 2020",
          },
          {
            title: "Our Purpose at Lean Enterprise Consulting",
            link: "/blog/our-purpose",
            date: "January 1, 2020",
          },
        ],
      },
      copyright: {
        text: "© 2008 - 2022 Lean Enterprise Consulting, Inc. | All Rights Reserved.",
      },
    },
  };

  return (
    <Layout header={data.header} footer={data.footer}>
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
