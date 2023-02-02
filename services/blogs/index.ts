/** @format */

export const GetAllBlogs = async () => {
  const posts = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/posts?_embed?_fields=title,id,featured_media,date,_embedded"
  );
  const AllPosts = await posts.json();
  return AllPosts;
};
