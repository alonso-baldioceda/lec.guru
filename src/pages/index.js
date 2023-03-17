import React from "react";
import styled from "styled-components";

// Components
import Layout from "../components/Layout";
import Block from "../components/Block";
import Slider from "../components/Slider";

const StyledIndexPage = styled.div`
  .recent-posts {
    .slick-slider {
      h1 {
        margin-bottom: 0px !important;
      }
    }
  }
`;

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
            label: "Contact Us",
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
            label: "Look our services",
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
            label: "Contact Us",
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
            label: "Press here!",
            link: "/blog/where-does-our-symbol-come-from",
          },
        },
      ],
    },
    recentPost: {
      bgColor: "bg-chateau",
      heading: "Recent posts by our president ...",
      slides: [
        {
          heading: "Living our own Lives!",
          by: "by Thomas Agrait | December 13, 2021 | Uncategorized | Comments",
          text: "On December 15, 1933, Jung responded to a woman who had asked his guidance on, quite simply, how to live. Two generations after the young Nietzsche admonished that “no one can build you the bridge on which you, and only you, must cross the river of life,” Jung...",
          img: {
            src: "/images/homepagePostsUpdated/slide1.jpeg",
            alt: "Do you want to improve your business processes?",
          },
          cta: {
            label: "Read more",
            link: "/blog/living-our-own-lives",
          },
        },
        {
          heading: "Virtual Inspection",
          by: "by Thomas Agrait | June 3, 2021 | Uncategorized | Comments",
          text: "Here is a quick update on FDA Virtual Inspection Program;   FDA's long-awaited guidance on remote interactive facility evaluations is finally here: In November 2020, Pink Sheet reported that during an IPAC-RS virtual roundtable, deputy director of FDA’s Office of...",
          img: {
            src: "/images/homepagePostsUpdated/slide2.jpeg",
            alt: "Problems with the industry and government?",
          },
          cta: {
            label: "Read more",
            link: "/blog/3812-2",
          },
        },
        {
          heading:
            "Recruiting for skilled positions is becoming increasingly competitive...",
          by: "by Thomas Agrait | April 3, 2021 | Uncategorized | Comments",
          img: {
            src: "/images/homepagePostsUpdated/slide3.jpeg",
            alt: "Recruiting for skilled positions is becoming increasingly competitive...",
          },
          cta: {
            label: "Read more",
            link: "/blog/it-doesnt-matter-how-many-times-you-fail-it-only-matters-that-you-dont-the-last-time-you-try",
          },
        },
        {
          heading: "Our Purpose at Lean Enterprise Consulting",
          by: "by Thomas Agrait | October 6, 2021 | Uncategorized | Comments",
          img: {
            src: "/images/homepagePostsUpdated/slide4.jpeg",
            alt: "Our Purpose at Lean Enterprise Consulting",
          },
          cta: {
            label: "Read more",
            link: "/blog/our-purpose-at-lean-enterprise-consulting",
          },
        },
        {
          heading: "Facing Challenges!",
          by: "by Thomas Agrait | June 6, 2020 | Uncategorized | Comments",
          img: {
            src: "/images/homepagePostsUpdated/slide5.jpeg",
            alt: "Facing Challenges!",
          },
          cta: {
            label: "Read more",
            link: "/blog/facing-challenges",
          },
        },
      ],
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
    <StyledIndexPage>
      <Layout header={data.header} footer={data.footer}>
        {/* Hero */}
        <Slider nodes={data.hero.slides} />
        {/* Recent posts */}
        <section className="recent-posts">
          <Block bgColor={data.recentPost.bgColor}>
            <h1 className="text-seashell text-center">
              {data.recentPost.heading}
            </h1>
          </Block>
          <Block>
            <Slider nodes={data.recentPost.slides} />
          </Block>
        </section>
        {/* Services */}
        <Block bgColor={data.recentPost.bgColor}>
          <h1 className="text-seashell text-center">{data.services.heading}</h1>
        </Block>
        {/* Cards */}
        <Block>
          <h2 className="text-center">expertise cards here!</h2>
        </Block>
      </Layout>
    </StyledIndexPage>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
