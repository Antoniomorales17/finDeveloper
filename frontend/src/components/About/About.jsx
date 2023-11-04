import React from "react";
import aboutImg from "./../../assets/images/about.webp";
import aboutCardImg from "./../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                    {/* img */}
                    <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                    <img src={aboutImg} alt="" className="rounded-md w-4/5 lg:w-3/5" />



                        <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30px] md:right-[-7px] lg:right-[22%]">
                        <img src={aboutCardImg} alt="" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                        <h2 className="heading">
                            Dejanos tus datos
                        </h2>
                        <p className="text__para">
                            No queremos que pierdas el tiempo, solicita a un especialista para tu proyecto en minutos
                        </p>

                        <p className="text__para mt-[30px]">
                            Estás en buenas manos, trabajamos con los mejores
                        </p>
                        <Link
                            to="/">
                                <button className="btn">
                                    Solicita a un reclutador
                                </button>
    
                            
                         
                        </Link>


                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;
