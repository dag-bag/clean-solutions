export const GetAllBlogs = async () => {
  const posts = await fetch(
    'https://customcleansolutions.com/wp-json/wp/v2/posts?&_embed=wp:featuredmedia&_fields=title,_links,_embedded,excerpt,id'
  );
  const AllPosts = await posts.json();
  return AllPosts;
};

export const GetPostsFromNextJsApi = async () => {
  const postsResponse = await fetch("/api/blogs");
  const posts = await postsResponse.json();
  return posts.posts;
};

