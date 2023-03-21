import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

// Variables
import { color, prefix } from "./../shared/styles.js";

// Components
import BackgroundImage from "../components/BackgroundImage";
import CardV1 from "../components/CardV1";
import CardV2 from "../components/CardV2";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Mask from "../components/Mask";
import Slider from "../components/Slider.jsx";
import SliderContentV1 from "../components/SliderContentV1.jsx";

const StyledIndexPage = styled.div``;

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
      img: "images/unclasified/3.jpg",
      heading: "LEAN Enterprise Consultory",
      text: "We transform your company into an efficient and customer-oriented organization through the use of Lean methodologies.",
      small:
        "For more than 40 years we have helped more than 200 organizations to be more productive and profitable through the identification and elimination of unnecessary processes, reduction of time and elimination of defects, among others.",
      cta: [
        {
          label: "Meet the experts",
          link: "/executive-advisors",
        },
        {
          label: "Our Services",
          link: "/services",
        },
      ],
    },
    services: {
      heading: "Our Services",
      text: "We offer a variety of services focused on improving quality, efficiency, and customer satisfaction by eliminating waste and improving processes. Our main services are detailed below:",
      cards: [
        {
          icon: "lightbulb-fill",
          heading: "Lean processes",
          text: "We identify opportunities to reduce waste and improve the efficiency of your organization's processes.",
          link: "/services#lean-processes",
          cta: "Read more",
        },

        {
          icon: "bar-chart-fill",
          heading: "Visual management",
          text: "We create visual systems to provide quick and easy-to-understand information about the status of processes and tasks.",
          link: "/services#visual-management",
          cta: "Read more",
        },
        {
          icon: "shield-lock-fill",
          heading: "5S method",
          text: "We implement the 5S method to organize and maintain clean and orderly workplaces, improving efficiency and safety.",
          link: "/services#5s-method",
          cta: "Read more",
        },
        {
          icon: "arrow-repeat",
          heading: "Kaizen phylosophy",
          text: "We implement the Kaizen philosophy of continuous improvement, which focuses on identifying and eliminating waste and improving processes constantly.",
          link: "/services#kaizen-phylosophy",
          cta: "Read more",
        },
        {
          icon: "x-octagon-fill",
          heading: "Value stream mapping",
          text: "We identify and eliminate processes that do not add value to improve efficiency and quality.",
          link: "/services#value-stream-mapping",
          cta: "Read more",
        },
        {
          icon: "clipboard-pulse",
          heading: "Design of experiments",
          text: "We use design of experiments techniques to identify and analyze the factors that affect processes and decisions.",
          link: "/services#design-of-experiments",
          cta: "Read more",
        },
      ],
    },
    blog: {
      heading: "Our Blog",
      text: "Here you will find the lattest articles and resources on the world of lean manufacturing and lean management. Whether you're just starting your lean journey or looking to take your current processes to the next level, our blog section is the perfect resource for you. Join us as we explore the latest trends and best practices in lean consulting and help you unlock the full potential of your organization. Thank you for visiting and we look forward to partnering with you on your lean journey!",
      slider: {
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
        nodes: [
          {
            heading: "Do you want to improve your business processes?",
            img: {
              src: "/images/arm.png",
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
              src: "/images/arm.png",
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
              src: "/images/arm.png",
              alt: "Recruiting for skilled positions is becoming increasingly competitive...",
            },
            cta: {
              label: "Contact Us",
              link: "/blog/recruiting-for-skilled-positions",
            },
          },
          {
            heading: "Do you want to improve your business processes?",
            img: {
              src: "/images/arm.png",
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
              src: "/images/arm.png",
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
              src: "/images/arm.png",
              alt: "Recruiting for skilled positions is becoming increasingly competitive...",
            },
            cta: {
              label: "Contact Us",
              link: "/blog/recruiting-for-skilled-positions",
            },
          },
        ],
      },
    },
    about: {
      heading: `<i class="fs-1">Meet our team of</i> <span class='decorator fs-1'>experts</span><i class="fs-1">, a word-class</i> <span class='decorator fs-1'>problem solvers</span>`,
      company: {
        heading: "Our Company",
        text: "We are a consulting firm specializing in Lean Process Improvement. Our team of experienced consultants has worked with a variety of industries to identify opportunities to reduce waste and improve efficiency in their processes. At our core, we believe in a hands-on approach to problem-solving. Our consultants work side-by-side with our clients to identify opportunities for improvement and develop solutions that are tailored to their specific needs.",
      },
      mission: {
        heading: "Our Mission",
        text: "Our mission is to help organizations achieve their full potential through the implementation of Lean Process Improvement techniques. We believe that every organization has the potential to be more efficient, more productive, and more successful. We are committed to providing our clients with the highest level of service and expertise. Our goal is to build long-term relationships with our clients and help them achieve sustainable improvements in their processes.",
      },
    },
    team: {
      heading: "Our Experts",
      cards: [
        {
          img: "images/unclasified/face.jpg",
          link: "/executive-advisors",
          name: "Jane Doe",
          job: "Job",
          text: "Jane is an experienced Lean Six Sigma Black Belt and has helped numerous companies streamline their processes and increase efficiency.",
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
        },
        {
          img: "images/unclasified/face.jpg",
          link: "/executive-advisors",
          name: "Jane Doe",
          job: "Job",
          text: "Jane is an experienced Lean Six Sigma Black Belt and has helped numerous companies streamline their processes and increase efficiency.",
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
        },
        {
          img: "images/unclasified/face.jpg",
          link: "/executive-advisors",
          name: "Jane Doe",
          job: "Job",
          text: "Jane is an experienced Lean Six Sigma Black Belt and has helped numerous companies streamline their processes and increase efficiency.",
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
        },
        {
          img: "images/unclasified/face.jpg",
          link: "/executive-advisors",
          name: "Jane Doe",
          job: "Job",
          text: "Jane is an experienced Lean Six Sigma Black Belt and has helped numerous companies streamline their processes and increase efficiency.",
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
        },
      ],
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
    <StyledIndexPage>
      <Layout header={data.header} footer={data.footer}>
        {/* Hero */}
        <Hero {...data.hero} />
        {/* Services */}
        <div className={`bg-marino-lighter ${prefix}-services`}>
          <Container className="py-4 py-lg-5">
            <h2 className="text-center my-4 my-lg-5 fs-1">
              {data.services.heading}
            </h2>
            <p className="text-center mb-4 mb-lg-5 fs-5">
              {data.services.text}
            </p>
            <Row>
              {data.services.cards.map((card, index) => (
                <Col sm={6} lg={4} key={index} className="mb-4 mb-lg-5">
                  <CardV1 {...card} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        {/* Blog */}
        <div className={`${prefix}-blog`}>
          <Container className="py-4 py-lg-5">
            <Row className="justify-content-center">
              <Col lg={10}>
                <h2 className="text-center my-3 my-lg-5 text-casal fs-1">
                  {data.blog.heading}
                </h2>
                <p className="mb-3 mb-lg-5">{data.blog.text}</p>
                <div className="bg-marino-lighter">
                  <Slider settings={data.blog.slider.settings}>
                    {data.blog.slider.nodes.map((item, index) => (
                      <div key={index}>
                        <SliderContentV1 {...item} />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* About us */}
        <div className={`${prefix}-about position-relative`}>
          <BackgroundImage src="images/unclasified/4.jpg" />
          <Mask bgColor={color.sycamoreLight} opacity={90} />
          <div className="py-3 py-lg-5">
            <Container className="py-4 py-lg-5">
              <Row className="justify-content-center">
                <Col lg={8}>
                  <h2
                    className="text-center mb-3 mb-lg-5 fs-1 text-dark underlined"
                    dangerouslySetInnerHTML={{
                      __html: data.about.heading,
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-4 px-lg-5">
                  <h3 className="mt-4 mb-4 text-dark text-center font-italic">
                    {data.about.company.heading}
                  </h3>
                  <p className="text-dark text-center">
                    {data.about.company.text}
                  </p>
                </Col>
                <Col sm={6} className="px-4 px-lg-5">
                  <h3 className="mt-4 mb-4 text-dark text-center font-italic">
                    {data.about.mission.heading}
                  </h3>
                  <p className="text-dark text-center">
                    {data.about.mission.text}
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        {/* Our experts */}
        <div className={`${prefix}-team`}>
          <Container className="pt-4 pt-lg-5">
            <Row className="my-4 my-lg-5 justify-content-center">
              <Col xs={12} className="mb-4">
                <h2 className="text-center fs-1 mb-4 mb-lg-5">
                  {data.team.heading}
                </h2>
              </Col>
              {data.team.cards.map((card, index) => (
                <Col sm={6} xl={3} key={index} className="mb-4 mb-lg-5">
                  <CardV2 {...card} />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Layout>
    </StyledIndexPage>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
