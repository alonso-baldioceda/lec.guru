export const formatAuthorName = (author) =>
  `${author.node.firstName} ${author.node.lastName}`;

export const getRecentPosts = (allWpPost) => {
  const posts = allWpPost?.nodes;
  const recentPosts = posts?.slice(0, 5);
  return recentPosts;
};
