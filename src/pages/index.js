import React from "react";

// Components
import Layout from "../components/Layout";
import Block from "../components/Block";
import Slider from "../components/Slider";

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
    hero: {
      settings: {
        arrows: true,
        autoplay: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        dots: true,
        fade: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
      },
      slides: [
        {
          heading: "Do you want to improve your business processes?",
          img: {
            src: "/images/homepageHero/slide1.jpeg",
            alt: "Do you want to improve your business processes?",
          },
          cta: {
            label: "Read more",
            link: "/blog/improve-your-business-processes",
          },
        },
        {
          heading: "Problems with the industry and government?",
          img: {
            src: "/images/homepageHero/slide2.jpeg",
            alt: "Problems with the industry and government?",
          },
          cta: {
            label: "Read more",
            link: "/blog/problems-with-the-industry-and-government",
          },
        },
        {
          heading:
            "Recruiting for skilled positions is becoming increasingly competitive...",
          img: {
            src: "/images/homepageHero/slide3.jpeg",
            alt: "Recruiting for skilled positions is becoming increasingly competitive...",
          },
          cta: {
            label: "Read more",
            link: "/blog/recruiting-for-skilled-positions",
          },
        },
        {
          heading: "Do you want to know where our symbol comes from?",
          img: {
            src: "/images/homepageHero/slide4.jpeg",
            alt: "Do you want to know where our symbol comes from?",
          },
          cta: {
            label: "Read more",
            link: "/blog/where-does-our-symbol-come-from",
          },
        },
      ],
    },
    recentPost: {
      bgColor: "bg-chateau",
      heading: "Recent posts by our president ...",
    },
    services: {
      bgColor: "bg-chateau",
      heading: `"The unique goal of our Lean Enterprise Consulting experts is to make you successful"`,
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
      {/* Hero */}
      <Slider nodes={data.hero.slides} />
      {/* Recent posts */}
      <Block bgColor={data.recentPost.bgColor}>
        <h1 className="text-seashell text-center">{data.recentPost.heading}</h1>
      </Block>
      {/* Slider posts */}
      {/* <Slider nodes={data.recentPost.slides} /> */}
      {/* Services */}
      <Block bgColor={data.recentPost.bgColor}>
        <h1 className="text-seashell text-center">{data.services.heading}</h1>
      </Block>
      {/* Cards */}
      <h1>#Cards</h1>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
