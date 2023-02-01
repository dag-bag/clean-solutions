/** @format */

export const GetAllBlogs = async () => {
  const posts = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/posts"
  );
  const AllPosts = await posts.json();
  return AllPosts;
};
