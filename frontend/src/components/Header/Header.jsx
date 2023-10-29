import React from "react";
import { useEffect, useRef } from "react";
import logo from "./../../assets/images/logo.png"
import userImg from "./../../assets/images/client-avatar.png"
import { Link, NavLink } from "react-router-dom";

const navLinks = [
    {
        name:"Inicio",
        path:"/home"
    },
    {
        name:"Buscar Dev",
        path:"/developers"
    },
    {
        name:"Servicios",
        path:"/services"
    },
    {
        name:"Contacto",
        path:"/contact"
    }
]

const Header = () => {
    return (
        <header className="header flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>

                    <nav className="navigation">
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {
                                navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLink 
                                        to={link.path}
                                        className={navClass =>
                                        navClass.isActive
                                      ? "text-yellowColor text-[16px] leading-7 font-[600]"
                                      : "text-yellowColor text-[16px] leading-7 font-[500] hover:text-yellowColor"
                                    }
                                       > {link.name} </NavLink>
                                    </li>
                                ))
                            }

                        </ul>

                    </nav>
                    <nav className="flex items-center gap-4">
                        <div className="hidden">
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                                    <img src={userImg} className="w-full rounded-full" alt="" />

                                </figure>
                                {/* <button className="text-textColor text-[16px] leading-7 font[500] hover:text-yellowColor">Login</button> */}
                            </Link>
                        </div>

                        <div>
                            <Link to="/login">
                                <button className="bg-yellowColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[500px]">
                                   Login

                                </button>
                                {/* <button className="text-textColor text-[16px] leading-7 font[500] hover:text-yellowColor">Login</button> */}
                            </Link>

                            <span className="md:hidden">

                            </span>
                        </div>

                    </nav>

                </div>


            
            </div>
        </header>
    )
}

export default Header