import Router from "next/router"
import { PostsInterFace } from "../types/blogs"
import Image from "next/image"
const BlogTile: React.FC<PostsInterFace> = (props) => {
    const paragraph = props.excerpt.rendered.replace('[&#8230;]', '...')
    function onReadMoreBtnClickHandler() {
        Router.push(`/blog/${props.id}`)
    }
    return (
        <div className="grid lg:grid-cols-[450px_auto] mb-5 bg-gray-100  overflow-hidden shadow">
            <div className="image-container">
                <Image src={props._embedded["wp:featuredmedia"][0].link} layout="fill" alt="any" className={'image'} />
            </div>
            <div className="p-10">
                <h1 className="text-2xl font-[500] mb-5 text-blue-1">{props.title.rendered}</h1>
                <p className="text-gray-500 text-md" dangerouslySetInnerHTML={{ __html: paragraph, }}></p>
                <button onClick={onReadMoreBtnClickHandler} className=" mt-5 items-center w-[150px] justify-start py-2 overflow-hidden  text-sm transition-all duration-150 ease-in-out rounded-full group border my-2 font-normal  border-green-1 text-green-1  hover:opacity-40  "> Read More → </button>
            </div>
        </div>
    )
}


export default BlogTile