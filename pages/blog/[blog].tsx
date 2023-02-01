/** @format */

import React from "react";

type Props = {
  post: PostsInterFace;
};
import marked from "marked";
import { GetStaticPaths, GetStaticProps } from "next";
import { PostsInterFace } from "../../types/blogs";
function BlogsDetailsPage({ post }: Props) {
  return (
    <div
      className=" mx-auto text-center  max-w-6xl prose py-10 md:prose-xl"
      dangerouslySetInnerHTML={{
        __html: post.content.rendered,
      }}
    ></div>
  );
}

export default BlogsDetailsPage;
export const getStaticPaths: GetStaticPaths = async () => {
  const getPaths = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/posts?_fields=id"
  );
  const ids = await getPaths.json();
  const paths = ids.map((post: { id: number }) => ({
    params: { blog: `${post.id}` },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const getPostResponse = await fetch(
    "https://customcleansolutions.com/wp-json/wp/v2/posts/" + params?.blog
  );
  const getPostData = await getPostResponse.json();
  console.log("getPostData:", getPostData);

  return {
    props: {
      post: getPostData,
    },
  };
};
