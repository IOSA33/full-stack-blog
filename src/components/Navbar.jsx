import {useState} from "react";
import Image from "./Image.jsx";
import {Link} from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='navbar w-full h-16 md:h-20 flex items-center justify-between '>
            {/* LOGO */}
            <Link to="/" className='navbar-brand flex items-center justify-between gap-4 text-2xl font-bold'>
                <Image src="logo.png" alt="Logo" w={32} h={32} />
                <span> IOSA blog.</span>
            </Link>


            {/* MOBILE MENU */}
            <div className='navbar-menu md:hidden'>
                {/* MOBILE BUTTON */}
                <div className='flex cursor-pointer text-3xl' onClick = {() => setOpen(prev => !prev)}>
                    {open ? "X" : "="}
                </div>

                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 gap-8 text-lg font-medium transition-all ease-in-out
                    ${open ? '-right-0' : '-right-[100%]'}`}
                >
                    <Link to="/"> Home </Link>
                    <Link to="/"> Trending </Link>
                    <Link to="/"> Most Popular </Link>
                    <Link to="/"> About </Link>
                    <Link to="/">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-700 text-white'>
                        Login
                    </button>
                </Link>

                </div>
            </div>


            {/* DESKTOP MENU */}
            <div className='navbar-menu hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
                <Link to="/"> Home </Link>
                <Link to="/"> Trending </Link>
                <Link to="/"> Most Popular </Link>
                <Link to="/"> About </Link>

                <SignedOut>
                    <Link to="/login">
                        <button className='py-2 px-4 rounded-3xl bg-blue-800 hover:bg-blue-700 text-white'>
                            Login
                        </button>
                    </Link>
                </SignedOut>

                <SignedIn>
                    <UserButton />
                </SignedIn>

            </div>
        </nav>
    )
}

export default Navbar









