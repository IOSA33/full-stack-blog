import Image from "../components/Image.jsx";
import {Link} from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions.jsx";
import Search from "../components/Search.jsx";
import Comments from "../components/Comments.jsx";

const SinglePostPage = () => {
    return (
        <div className='flex flex-col gap-8'>
            {/* detail */}
            <div className='flex gap-8'>
                <div className='lg:w-3/5 flex flex-col gap-8'>
                    <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
                        The cat stared suspiciously at the toaster, as if it held ancient secrets.
                    </h1>
                    <div className='flex items-center gap-2 text-gray-400 text-sm'>
                        <span>Written by</span>
                        <Link to='/' className='text-blue-800'> Someone </Link>
                        <span>on</span>
                        <Link to='/' className='text-blue-800'> Web design </Link>
                        <span>2 days ago</span>
                    </div>
                    <p className='text-gray-500 font-medium'>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                    </p>
                </div>
                <div className='hidden lg:block w-2/5'>
                    <Image src="postImg.jpeg" w='600' className='rounded-2xl' />
                </div>
            </div>
            {/* content */}
            <div className='flex flex-col md:flex-row gap-8'>
                {/* text */}
                <div className='lg:text-lg flex flex-col gap-6 text-justify'>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                    <p>
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                    </p>
                </div>
                {/* menu */}
                <div className='px-4 h-max sticky top-8'>
                    <h1 className='mb-4 text-sm font-medium'> Author </h1>
                    <div className='flex flex-col gap-4'>
                        <div className='flex  items-center gap-8'>
                            <Image src='userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w='48' h='48'/>
                            <Link to='/' className='text-blue-800'> Someone </Link>
                        </div>
                        <p className='text-sm text-gray-500'>User descriptiop for someone. Lets talk about nextJS15</p>
                        <div className='flex gap-2'>
                            <Link to='/' className=''>
                                <Image src='facebook.svg'/>
                            </Link>
                            <Link to='/' className=''>
                                <Image src='instagram.svg'/>
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions />
                    <h1 className='mt-8 mb-4 text-sm font-medium'> Categories </h1>
                    <div className='flex flex-col gap-2 text-sm'>
                        <Link to='/' className='underline'> All </Link>
                        <Link to='/' className='underline'> Web design </Link>
                        <Link to='/' className='underline'> Development </Link>
                        <Link to='/' className='underline'> Databases </Link>
                        <Link to='/' className='underline'> Search Engines </Link>
                        <Link to='/' className='underline'> Marketing </Link>
                    </div>
                    <h1 className='mt-8 mb-4 text-sm font-medium'> Search </h1>
                    <Search />
                </div>
            </div>
            <Comments />

        </div>
    )
}

export default SinglePostPage