import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiPhoneCall } from "react-icons/fi";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);


    const user = {}


    const navigate = useNavigate();

    const handleSignout = () => {

        navigate('/signin');
    };

    const NavFont =
        'mr-4 block cursor-pointer py-1.5 font-sans text-xl font-medium leading-relaxed  antialiased';

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
            title: "work",
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
                                ` ${isActive
                                    ? 'text-green-700  p-4 font-bold'
                                    : `${isMenuOpen
                                        ? 'block p-4  text-xs   text-white '
                                        : 'text-sm text-white  '
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
        <div className="sticky inset-0 z-50 bg-black   mx-auto text-black lg:px-36 ">
            <div className="">
                <nav className="relative px-4 py-1 flex justify-between items-center ">
                    <div className="flex space-x-5">

                        <NavLink className="text-3xl font-bold leading-none " to={''}>
                            <h4 className="mb-2 block text-white  font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                Atlio
                            </h4>
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
                    <div className="hidden lg:block border rounded-3xl px-2 border-green-600 border-b-4 cursor-pointer border-t-2"><span className='flex items-center justify-center text-sm text-white'>whatsApp <FiPhoneCall className="w-4 h-4  border  rounded-full ml-1 " /></span> </div>
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
