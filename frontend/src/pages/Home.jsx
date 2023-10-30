import React from "react";
import meee from "./../assets/images/meee.png";
import heroimg02 from "./../assets/images/hero-img02.png";
import heroimg03 from "./../assets/images/hero-img03.png";
import icon01 from "./../assets/images/icon01.png";
import icon02 from "./../assets/images/icon02.png";
import icon03 from "./../assets/images/icon03.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
                        </p>

                        <button className="btn">
                            Solicita a un reclutador
                        </button>
                    </div>

                    <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                10+
                            </h2>
                            <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-14"></span>
                            <p className="text__para">Años de experiencia</p>
                        </div>

                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                10000+
                            </h2>
                            <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-14"></span>
                            <p className="text__para">Desarrolladores</p>
                        </div>
                        <div>
                            <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                                100%
                            </h2>
                            <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-14"></span>
                            <p className="text__para"> Clientes satisfechos</p>
                        </div>
                        {/* ===== herocontent ===== */}
                        <div className="flex gap-[30px] justify-end">
                            <div>
                                <img className="w-full" src={meee} alt="" />

                            </div>

                        </div>


                        <div className="mt-[30px]">
                            <img className="w-full mb-[30px]" src={heroimg02} alt="" />
                            <img className="w-full" src={heroimg03} alt="" />

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
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod.
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
            <About/>
            
        </>
    );
};

export default Home;
