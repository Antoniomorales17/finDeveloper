import React from "react";
import me from "./../assets/images/yop.png";
import heroimg02 from "./../assets/images/dev.jpeg";
import heroimg03 from "./../assets/images/dev1.jpeg";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import faqImg from "./../assets/images/faq-img.png";
import avatarIcon from "./../assets/images/avatar-icon.png";
import videoIcon from "./../assets/images/video-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DevList from "../components/Devs/DevList";
import FaqsList from "../components/Faqs/FaqsList";
import Testimonial from "../components/Testimonial/Testimonial";


const Home = () => {
    return (
        <>
            {/* ====== herosection ===== */}
            <section className="hero__section pt-[60px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-content">
                        {/* ===== herocontent ===== */}
                    </div>



                    <div className="lg:w-[570px]">
                        <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[600] md:leading-[70px]">
                            Encuentra un <span className="text-white p-1 bg-yellowColor rounded-full ">desarrollador</span> en 
                            <span className="text-white p-1 bg-purpleColor rounded-full">minutos</span>
                        </h1>

                        <p className="text__para">
                            En finDeveloper, te conectamos con talentosos desarrolladores de todo el mundo, listos para llevar a cabo tus ideas y hacer crecer tus proyectos. Simplifica tu búsqueda y acelera tu desarrollo con nosotros.
                        </p>
                        <a href="/developers">

                        <button className="btn">
                            Solicita a un reclutador
                        </button>
                        </a>
                    </div>

                    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center justify-center gap-5 lg:gap-[30px]">
  <div className="text-center lg:text-left">
    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
      10+
    </h2>
    <div className="flex items-center">
      <span className="w-[100%] h-2 bg-yellowColor rounded-full block"></span>
    </div>
    <p className="text__para mt-2">Años de experiencia</p>
  </div>

  <div className="text-center lg:text-left">
  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
    1.000+
  </h2>
  <div className="flex items-center">
    <span className="w-[100%] h-2 bg-purpleColor rounded-full block"></span>
  </div>
  <p className="text__para mt-2">Desarrolladores y Técnicos</p>
</div>
<div className="text-center lg:text-left">
  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
    100%
  </h2>
  <div className="flex items-center">
    <span className="w-[100%] h-2 bg-irisBlueColor rounded-full block"></span>
  </div>
  <p className="text__para mt-2">Clientes satisfechos</p>
</div>

                        {/* ===== herocontent ===== */}
                        <div className="flex gap-30 justify-end">
                            {/* <div>
    <img className="w-64 h-64 object-cover rounded-full" src={me} alt="" />
  </div> */}
                        </div>

                        <div className="mt-30">
                            <div className="grid grid-cols-2 gap-4">
                                <img className="w-full h-64 object-cover rounded-lg" src={heroimg02} alt="" />
                                <img className="w-full h-64 object-cover rounded-lg" src={heroimg03} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="container">
                <div className="lg:w-[470px] mx-auto">
                    <h2 className="heading text-center">
                        Maximiza tus beneficios
                    </h2>
                    <p className="text__para text-center">
                        Potencia tu empresa o proyecto hasta donde nunca habías imaginado
                    </p>
                </div>
            </div>

            <section>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon01} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Encuentra un dev
                            </h2>

                            <p className="text__para text-center leading-7 text-textColor font-[400] mt-4">
                                Encuentra al desarrollador que se ajuste a tus necesidades
                            </p>
                            <Link
                                to="/developers"
                                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>



                        </div>



                    </div>

                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon02} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Busca por pais
                            </h2>

                            <p className="text__para text-center leading-7 text-textColor font-[400] mt-4">
                                Selecciona el pais que te guste y contacta con tu programador
                            </p>
                            <Link
                                to="/developers"
                                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>



                        </div>


                    </div>

                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon03} alt="" />
                        </div>

                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Pide una cita
                            </h2>

                            <p className="text__para text-center leading-7 text-textColor font-[400] mt-4">
                                Mandale un mensaje con tus preferencias, tendras una respuesta en menos de 24h
                            </p>
                            <Link
                                to="/developers"
                                className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-yellowColor hover:border-none"
                            >
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />

                            </Link>
                        </div>


                    </div>

                </div>
            </section>
            <About />

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">
                            Nuestros servicios
                        </h2>
                        <p className="text__para text-center">
                            Disponemos de las últimas tendencias tecnológicas que dominan el mercado
                        </p>
                    </div>

                    <ServiceList />
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="flex items-center justify-between flex-col lg:flex-row ">
                        <div className="xl:w-[670]">
                            <h2 className="heading">
                                Obtenga una asesoria virtual
                            </h2>
                            <ul className="pl-4">
                                <li className="text__para">
                                    1.Contrato directo con desarrolladores
                                </li>
                                <li className="text__para">
                                    2.Encuentra recursos con valores y personalidad
                                </li>
                                <li className="text__para">
                                    3.Si no estas conforme con el trabajo, lo reemplazamos sin coste adicional
                                </li>
                            </ul>

                            <a href="/developers">
                                <button className="btn">Conocer más</button>
                                </a>

                            



                        </div>
                        <div className="relative z-10 xl:w-[760px] flex justify-end mt-[50px] lg:mt-0">
                            <img src={me} className="w-3/4" alt="" />

                            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4  lg:pb-[26px] rounded-[10px]">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6 lg:gap-3">
                                        <p className="text-[10px] lg:text-[14px] leading-[10px] lg:leading-5 text-headingColor font-semibold">
                                            Lun, 21
                                        </p>
                                        <p className="text-[10px] lg:text-[14px] leading-[10px] lg:leading-5 text-headingColor font-semibold">
                                            11:30
                                        </p>


                                    </div>
                                    <span className="text-[10px] leading-[10px] lg:text-[14px] flex justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3px lg:px-[9px]">
                                        <img src={videoIcon} className="3/4" alt="" />
                                    </span>
                                </div>
                                <div className="w-[65px] lg:w-[95px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                    Asesoria

                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] text-headingColor font-[700]">
                                        Pedro Sanchez
                                    </h4>

                                </div>

                            </div>
                        </div>
                    </div>
                    <DevList />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0 ">
                        <div className="w1/2 hidden md:block">
                            <img src={faqImg} alt="">

                            </img>
                        </div>
                        <div className="w-fill w1/2">
                            <h2 className="heading">Preguntas frecuentes</h2>
                            <FaqsList />
                        </div>


                    </div>

                    <Testimonial />

                </div>
            </section>

        </>
    );
};

export default Home;
