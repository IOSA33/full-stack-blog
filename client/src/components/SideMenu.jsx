import Search from "./Search.jsx";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className='px-4 h-max sticky top-8'>
            <h1 className='text-sm mb-4 font-medium'>Search</h1>
            <Search />
            <h1 className='mt-8 text-sm mb-4 font-medium'>Filters</h1>
            <div className='flex flex-col gap-2 text-sm'>
                <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
                    <input type='radio' name='sort' value='newest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer checked:bg-blue-800' />
                    Newest
                </label>
                <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
                    <input type='radio' name='sort' value='newest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer checked:bg-blue-800' />
                    Most Popular
                </label>
                <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
                    <input type='radio' name='sort' value='newest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer checked:bg-blue-800' />
                    Tranding
                </label>
                <label htmlFor='' className='flex items-center gap-2 cursor-pointer'>
                    <input type='radio' name='sort' value='newest' className='appearance-none w-4 h-4 border-[1.5px] border-blue-800 bg-white cursor-pointer checked:bg-blue-800' />
                    Oldest
                </label>
            </div>
            <h1 className='mt-8 text-sm mb-4 font-medium'>Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
                <Link to='/posts' className='underline'> ALL </Link>
                <Link to='/posts?cat=web-design' className='underline'> Web Design </Link>
                <Link to='/posts?cat=development' className='underline'> Development </Link>
                <Link to='/posts?cat=databases' className='underline'> Databases </Link>
                <Link to='/posts?cat=seo' className='underline'> Search Engines </Link>
                <Link to='/posts?cat=marketing' className='underline'> Marketing </Link>
            </div>

        </div>
    )
}

export default Sidebar