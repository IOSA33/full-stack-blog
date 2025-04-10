import {useState} from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='navbar w-full h-16 md:h-20 flex items-center justify-between'>
            {/* LOGO */}
            <div className='navbar-brand flex items-center justify-between gap-4 text-2xl font-bold'>
                <img src='/logo.png' className='w-8 h-8' alt='Logo' />
                <span> IOSA blog.</span>
            </div>


            {/* MOBILE MENU */}
            <div className='navbar-menu md:hidden'>
                {/* MOBILE BUTTON */}
                <div className='flex cursor-pointer text-3xl' onClick = {() => setOpen(prev => !prev)}>
                    {open ? "X" : "="}
                </div>

                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16  transition-all duration-200 ease-in-out
                    ${open ? '-right-0' : '-right-[100%]'}`}
                >

                    menu
                </div>
            </div>


            {/* DESKTOP MENU */}
            <div className='navbar-menu hidden md:flex'>
                D
            </div>
        </nav>
    )
}

export default Navbar