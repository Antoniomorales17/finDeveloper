import React from "react";
import { useEffect, useRef } from "react";
import logo from "./../../assets/images/Logooo.png"
import userImg from "./../../assets/images/client-avatar.png"
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from 'react-icons/bi';


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

const headerRef = useRef(null);
const menuRef = useRef(null);

const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
    if (document.body.scrollTop> 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky__header");
    } else {
        headerRef.current.classList.remove("sticky__header");
    }
})
}

useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
}, [])


const toggleMenu = () => menuRef.current.classList.toggle("show__menu");


    return (
        <header className="header flex items-center" ref={headerRef} >
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <a href="/">
                    <img src={logo} alt="" className="w-40 h-auto" />
                    </a>
                    </div>

                    <nav className="navigation" ref={menuRef} onClick={toggleMenu}>
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

                        
                            <Link to="/login">
                                <button className="bg-yellowColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[500px]">
                                   Login

                                </button>
                                {/* <button className="text-textColor text-[16px] leading-7 font[500] hover:text-yellowColor">Login</button> */}
                            </Link>

                            <span className="md:hidden" onClick={toggleMenu}>
                                <BiMenu className="w-6 h-6 cursor-pointer" />

                            </span>
                        
                    </nav>
                </div>           
            </div>
        </header>
    )
}

export default Header