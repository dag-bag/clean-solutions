import Router from "next/router"
import { PostsInterFace } from "../types/blogs"

const BlogTile: React.FC<PostsInterFace> = (props) => {
    const paragraph = props.excerpt.rendered.replace('[&#8230;]', '...')
    function onReadMoreBtnClickHandler() {
        Router.push(`/blog/${props.id}`)
    }
    return (
        <div className="grid lg:grid-cols-[450px_auto] mb-5 bg-gray-100  overflow-hidden shadow">
            <div>
                <img className="w-full h-full object-center" src={props._embedded["wp:featuredmedia"][0].link} alt={'image'} />
            </div>
            <div className="p-5">
                <h1 className="text-2xl font-semibold mb-5 ">{props.title.rendered}</h1>
                <p className="text-gray-500 text-md" dangerouslySetInnerHTML={{ __html: paragraph, }}></p>
                <button onClick={onReadMoreBtnClickHandler} className=" mt-5 items-center w-[150px] justify-start py-2 overflow-hidden  text-sm transition-all duration-150 ease-in-out rounded-full group border my-2 font-normal  border-black  hover:opacity-40  "> Read More → </button>
            </div>
        </div>
    )
}


export default BlogTile