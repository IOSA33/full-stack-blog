import PostList from "../components/PostList.jsx";
import SideMenu from "../components/SideMenu.jsx";
import {useState} from "react";

const PostListPage = () => {

    const [open, SetOpen] = useState(false);

    return (
        <div className=''>
            <h1 className='mb-8 text-2xl'>Development Blog</h1>
            <button onClick={() => SetOpen(prev => !prev)} className='md:hidden bg-blue-800 text-white text-sm px-4 py-2 font-medium rounded-2xl mb-4'>
                {open ? "Close" : "Filte or Search"}
            </button>
            <div className='flex flex-col-reverse md:flex-row gap-8'>
                <div className=''>
                    <PostList />
                </div>
                <div className={`${open ? 'block' : 'hidden'}  md:block`}>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default PostListPage