import {Link} from "react-router-dom";
import MainCategories from "../components/MainCategories.jsx";

const Homepage = () => {
    return (
        <div className='mt-4 flex flex-col gap-4'>
            {/* BREADCRUMB */}
            <div className='flex gap-4'>
                <Link to="/"> Home </Link>
                <span> - </span>
                <span className='text-blue-500'> Blogs and Articles </span>
            </div>
            {/* INTRODUCTION */}
            <div className='flex items-center justify-center'>
                {/* Titles */}
                <div className=''>
                    <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold'> The cat stared suspiciously at the toaster...</h1>
                    <p className='mt-8 text-md md:text-xl'> The cat stared suspiciously at the toaster, as if it held ancient secrets.
                        Rain tapped gently on the window, weaving a rhythm softer than any lullaby.
                        He wore mismatched socks to every important meeting, claiming it brought luck.
                        Somewhere in the distance, a harmonica cried out under the fading sun. </p>
                </div>
                {/* animated button */}
                <Link to='write' className='hidden relative md:block'>
                    <svg viewBox='0 0 200 200' width='200' height='200' className='text-lg tracking-widest animate-spin animatedButton' //className='text-lg tracking-widest animate-spin animatedButton'
                        >
                        <path id="circlePath" fill="none" d='M 100, 100 m -75, 0 a 75, 75 0 1,1 150, 0 a 75, 75 0 1,1 -150, 0' />
                        <text>
                            <textPath href="#circlePath" startOffset="0%">Write your story</textPath>
                            <textPath href="#circlePath" startOffset="50%">Share your idea</textPath>
                        </text>
                    </svg>
                    <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
                        <svg viewBox='0 0 24 24' width='50' height='50' fill="none" stroke="white" strokeWidth="2" xmlns='http://www.w3.org/2000/svg'>
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </button>
                </Link>
            </div>
            {/* CATEGORIES */}
            <MainCategories />
            {/* FEATURED POST */}
            {/* POST LIST */}
        </div>
    )
}

export default Homepage