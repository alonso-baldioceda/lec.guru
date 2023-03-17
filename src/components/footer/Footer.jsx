import React from "react";
import styled from "styled-components";

// Variables
import { color, prefix } from "./../../shared/styles.js";

// Components
import Blog from "./Blog";
import Business from "./Business";
import Contact from "./Contact";
import Copyright from "./Copyright";
import Nav from "./Nav";

// Styles
const StyledFooter = styled.footer`
  align-items: flex-start;
  background-color: ${color.black};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  padding-bottom: 0;
  padding-top: 8%;

  @media (min-width: 981px) {
    padding-top: 6%;
  }

  ul {
    display: block;
    list-style-type: none;

    li {
      margin-bottom: 0.65em;

      @media (min-width: 768px) {
        margin-bottom: 0.5em;
      }

      p {
        color: ${color.white};
        line-height: 23px;
      }
    }
  }
`;

const Content = styled.div`
  clear: both;
`;

const Column = styled.div`
  float: left;
  margin-bottom: 9.5%;
  width: 100%;

  &:nth-child(2n) {
    margin-right: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 768px) {
    margin: 0 7.5% 7.5% 0;
    width: 46.25%;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (min-width: 981px) {
    margin: 0 5.5% 5.5% 0;
    width: 20.875%;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Heading = styled.h4`
  color: ${color.botti};
  font-size: 21px;
  padding-bottom: 10px;
`;

const Footer = ({ blog, business, contact, copyright, nav }) => {
  return (
    <>
      <StyledFooter
        className={`${prefix}-footer`}
        style={{ backgroundImage: `url("images/footer.jpg")` }}
      >
        <Content className="container">
          <Column>
            <Heading>{nav.heading}</Heading>
            <Nav nav={nav.nav} />
          </Column>
          <Column>
            <Heading>{contact.heading}</Heading>
            <Contact phone={contact.phone} email={contact.email} />
          </Column>
          <Column>
            <Heading>{business.heading}</Heading>
            <Business days={business.days} vacations={business.vacations} />
          </Column>
          <Column>
            <Heading>{blog.heading}</Heading>
            <Blog posts={blog.posts} />
          </Column>
        </Content>
      </StyledFooter>
      <Copyright text={copyright.text} />
    </>
  );
};

export default Footer;
