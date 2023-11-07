import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/Logooo.png";
import { RiLinkedinFill } from "react-icons/ri";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";

const socialLinks = [
  {
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UC-99999999",
  },
  {
    icon: <AiFillGithub />,
    link: "https://github.com/Antoniomorales17",
  },
  {
    icon: <RiLinkedinFill />,
    link: "https://www.linkedin.com/in/antoniomoralesgimenez/",
  }
];

const navLinks01 = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Nosotros",
    path: "/developers",
  },
  {
    name: "Servicios", // Corregido "icon" a "name"
    path: "/services",
  },
  {
    name: "Contacto", // Corregido "icon" a "name"
    path: "/contact",
  }
];

const navLinks02 = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Nosotros",
    path: "/developers",
  },
  {
    name: "Servicios", // Corregido "icon" a "name"
    path: "/services",
  },
  {
    name: "Contacto", // Corregido "icon" a "name"
    path: "/contact",
  }
];

const navLinks03 = [
    {
      name: "Inicio",
      path: "/home",
    },
    {
      name: "Nosotros",
      path: "/developers",
    },
    {
      name: "Servicios", // Corregido "icon" a "name"
      path: "/services",
    },
    {
      name: "Contacto", // Corregido "icon" a "name"
      path: "/contact",
    }
  ];
  

const Footer = () => {
  return (
    <div className="container">
     <div className="flex flex-col md:flex-row justify-between gap-[30px] items-center">
      <a href="/">
     <img src={Logo} alt="" className="w-40 h-auto" />
     </a>
        <p className="text-[16px] leading-7 font-[400] text-textColor">
          Copyright {new Date().getFullYear()} desarrollado por AntonioMorales
        </p>


        <div className="flex items-center gap-3 mt-4">
          {socialLinks.map((socialLink, index) => (
            <Link
              key={index}
              to={socialLink.link} // Utiliza "href" en lugar de "to" para los enlaces externos
              target="_blank" // Abre enlace en una nueva pestaña
              rel="noopener noreferrer" // Añade atributo rel para seguridad
              className="w-9 h-9 rounded-full border border-solid border-[#181A1E] flex items-center justify-center text-gray-600 hover:text-[#181A1E] transition-colors duration-300"
            >
              {socialLink.icon}
            </Link>
          ))}
        </div>
       <div>
        <h3 className="text-[16px] leading-7 font-[700] mg-6 text-textColor">
            Navegacion
        </h3>
        <ul className="mt-4">
            {navLinks01.map((navLink, index) => (
                <li key={index} className="mb-4">
                    <Link to={navLink.path} className="text-[16px] leading-7 text-textColor">{navLink.name}
                    </Link>
                </li>
            ))}
        </ul>
       </div>
      </div>
    </div>
  );
}

export default Footer;
