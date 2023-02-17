import useSWR from "swr";
import BlogTile from "../blogTile"
import Loading from "../Loading";
import { PostsInterFace } from "../../types/blogs";
import { GetPostsFromNextJsApi } from "../../services/blogs";

const Blogs = () => {
    const { data } = useSWR<PostsInterFace[]>(
        "/blogs",
        GetPostsFromNextJsApi
    );

    if (!data) {
        return <Loading contain />
    }

    return (
        <section className=" bg-white max-w-7xl m-auto">
            <section id="blog" className="blog">
                {data.map((blogData) => (
                    <BlogTile {...blogData} />
                ))}
            </section>
        </section>

    )
}

export default Blogs