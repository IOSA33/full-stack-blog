import Image from './Image';
import {Link} from "react-router-dom";

const PostListItem = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-8'>
            {/* image */}
            <div className='md:hidden xl:block xl:w-1/3'>
                <Image src="postImg.jpeg" className='rounded-2xl object-cover' w='735'/>
            </div>
            {/* details */}
            <div className='flex flex-col gap-8 xl:w-2/3'>
                <Link to="/test" className='text-4xl font-semibold'>
                    The cat stared suspiciously at the toaster, as if it held ancient secrets.
                </Link>
                <div className='flex items-center gap-2 text-gray-400 text-sm'>
                    <span> Written by </span>
                    <Link className='text-blue-800'> IOSA Blog. </Link>
                    <span> on </span>
                    <Link className='text-blue-800'> Web Design </Link>
                    <span>2 days ago.</span>
                </div>
                <p>
                    The cat stared suspiciously at the toaster, as if it held ancient secrets.
                    Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                    He wore mismatched socks to every important meeting, claiming it brought luck.
                </p>
                <Link to='/test' className='text-sm underline text-blue-800'> Read More </Link>
            </div>
        </div>
    )
}

export default PostListItem;