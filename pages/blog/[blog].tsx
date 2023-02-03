/** @format */
import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
type Props = {
  post: PostsInterFace;
};
import { GetStaticPaths, GetStaticProps } from "next";
import { PostsInterFace } from "../../types/blogs";
function BlogsDetailsPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <>
        <Navbar />
        <div className=" p-5 md:p-0 text-4xl md:text-6xl   h-[500px] flex items-center justify-center  bg-[#F2F3F9]">
          <h1 className="max-w-6xl font-heading font-extrabold text-blue-1 ">{post.title.rendered}</h1>
        </div>
        <div
          className="p-5 mx-auto text-center max-w-6xl prose py-10 md:prose-xl prose-headings:font-heading prose-h1:font-bold prose-p:text-left  prose-p:text-gray-500 prose-p:my-0 prose-h1:py-10 prose-table:border-gray-100 prose-table:border-2 prose-a:text-sm prose-a:text-blue-500 "

          dangerouslySetInnerHTML={{
            __html: post.content.rendered,
          }}
        ></div>
      </>

    </>
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
  // _fields You can Select What kind of properties You Want to Get
  const getPostResponse = await fetch(
    `https://customcleansolutions.com/wp-json/wp/v2/posts/${params?.blog}?_embed`
  );
  const getPostData = await getPostResponse.json();
  console.log("getPostData:", getPostData);

  return {
    props: {
      post: getPostData,
    },
  };
};
