import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

// Components
import Slider from "./Slider";
import CardV3 from "./CardV3";

// Utils
import { formatAuthorName } from "./../shared/utils";

const BlockLatestSlider = () => {
  const data = useStaticQuery(graphql`
    query LatestPostsQuery {
      allWpPost(sort: { date: DESC }, limit: 6) {
        nodes {
          id
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          author {
            node {
              avatar {
                url
              }
              firstName
              lastName
            }
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const blogSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <Slider settings={blogSliderSettings}>
        {data.allWpPost.nodes.map((node) => {
          const image =
            node.featuredImage.node.localFile.childImageSharp.gatsbyImageData
              .images.fallback.src;
          const author = formatAuthorName(node.author);

          return (
            <div key={node.id}>
              <Link to={`/blog/${node.slug}`} className="text-decoration-none">
                <CardV3
                  author={author}
                  date={node.date}
                  image={image}
                  title={node.title}
                />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BlockLatestSlider;
