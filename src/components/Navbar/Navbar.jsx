import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const user = {}


    const navigate = useNavigate();

    const handleSignout = () => {

        navigate('/signin');
    };

    const NavFont =
        'mr-4 block cursor-pointer py-1.5 font-sans   leading-relaxed  antialiased';

    const navItemss = [
        {
            to: "/",
            title: "Home",
        },
        {
            to: "/team",
            title: "Team",
        },
        {
            to: "/service",
            title: "Service",
        },
        {
            to: "/work",
            title: "Work",
        },
        {
            to: "/contact",
            title: "Contact",
        },

    ]

    const navItems = (
        <>


            {
                navItemss?.map((item, i) => {
                    return <li key={i}>
                        <NavLink
                            onClick={() => setMenuOpen(false)}
                            to={item?.to}
                            className={({ isActive }) =>
                                `lg:hover:border-b-2 border-[#c0c2c7]
                                 ${isActive
                                    ? 'text-green-700   font-bold text-xl lg:border-b-2 border-[#c0c2c7]'
                                    : `${isMenuOpen
                                        ? 'block    text-white '
                                        : ' text-white  '
                                    }  `
                                } ${NavFont}`
                            }
                        >
                            {item?.title}
                        </NavLink>
                    </li>
                })
            }






        </>
    );


    return (
        <div className={`${isScrolled ? "bg-black top-0" : "bg-transparent lg:top-6 "} sticky  inset-0 z-50   mx-auto text-black lg:px-32`}>
            <div className="">
                <nav className="relative px-4  flex justify-between items-center py-3">
                    <div className="flex space-x-5">

                        <NavLink className="" to={'/'}>
                            <img
                                className='h-7 w-24 '
                                src="/images/Atelio Logo 2.png"

                                alt="" />
                        </NavLink>
                    </div>

                    <div
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className={`${isMenuOpen ? 'hidden' : 'block'}  lg:hidden`}
                    >
                        <button className="navbar-burger flex items-center text-white p-3">
                            <svg
                                className="block h-4 w-4 fill-current"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>open menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                        {navItems}
                    </ul>
                    <div className="hidden lg:block border rounded-3xl px-2 py-[2px] border-green-600  cursor-pointer "><span className='flex items-center justify-center text-sm text-white'>WhatsApp <span className='ml-1 border  border-green-600  rounded-full flex justify-center items-center'><FiPhoneCall className="w-3 h-3 m-[2px]  " /></span> </span> </div>
                </nav>
                <div
                    className={`navbar-menu relative z-50  ${isMenuOpen ? '' : 'hidden'}`}
                >
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                    <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black border-r overflow-y-auto ">
                        <div className="flex items-center mb-8">
                            <NavLink
                                className="mr-auto text-3xl font-bold leading-none"
                                to={''}
                            >
                                {/* icon */}
                            </NavLink>
                            <button
                                onClick={() => setMenuOpen(false)}
                                className="navbar-close"
                            >
                                <title>close menu</title>
                                <svg
                                    className="h-6 w-6 text-inherit cursor-pointer hover:text-gray-500 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div>
                            <ul>

                                {navItems}
                            </ul>
                            <div className=" lg:hidden border rounded-3xl px-2 py-[2px] border-green-600  cursor-pointer "><span className='flex items-center justify-center text-sm text-white'>WhatsApp <span className='ml-1 border  border-green-600  rounded-full flex justify-center items-center'><FiPhoneCall className="w-3 h-3 m-[2px]  " /></span> </span> </div>
                        </div>
                        <div className="mt-auto">
                            <div className="pt-6">

                                {/* {signOption} */}
                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
