// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { graphql } from "gatsby";

// const BlogPost = ({ data }) => {
//   const post = data.blogPost;

//   return (
//     <Container>
//       <Row>
//         <Col>
//           <h1>{post.title}</h1>
//           <p>{post.date}</p>
//           <div dangerouslySetInnerHTML={{ __html: post.content }} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export const query = graphql`
//   query ($slug: String!) {
//     blogPost(fields: { slug: { eq: $slug } }) {
//       title
//       date(formatString: "MMMM DD, YYYY")
//       content
//     }
//   }
// `;

// export default BlogPost;
