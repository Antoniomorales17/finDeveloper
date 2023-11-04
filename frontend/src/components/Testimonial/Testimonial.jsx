import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import devAvatar from "./../../assets/images/client-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
    return (
        <div className="mt-[30px] lg:mt-[50px] text-center pb-7">
            <h2 className="heading">
                Lo que dicen de nosotros
            </h2>

            <p className="text__para mt-4 pb-7">
                El público manda, nosotros seguimos mejorando
            </p>


            <Swiper
                modules={{ Pagination }}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">

                        <div className="flex items-center gap-[13px]">
                            <img src={devAvatar} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px]">
                                    Alfredo López
                                </h4>
                                <div className="flex items-center gap-[12px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 text-textColor font-[400]">
                        "Estoy impresionado por la calidad y profesionalismo de los desarrolladores que encontré en esta plataforma. Han transformado por completo nuestra empresa con su experiencia."
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={devAvatar} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px]">
                                    Antonio Morales
                                </h4>
                                <div className="flex items-center gap-[12px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 text-textColor font-[400]">
                        "Después de buscar en varios lugares, encontramos a los desarrolladores perfectos para nuestro proyecto en esta plataforma. No podríamos estar más satisfechos con los resultados."
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={devAvatar} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px]">
                                    Julian Bosh
                                </h4>
                                <div className="flex items-center gap-[12px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 text-textColor font-[400]">
                        "El equipo de desarrollo que encontramos aquí es excepcional. Han entregado proyectos de alta calidad a tiempo y dentro del presupuesto. ¡Recomiendo encarecidamente sus servicios!"
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-[30px] px-5 rounded-3">
                        <div className="flex items-center gap-[13px]">
                            <img src={devAvatar} alt="" />
                            <div>
                                <h4 className="text-[18px] leading-[30px]">
                                    Juan Diego Martín
                                </h4>
                                <div className="flex items-center gap-[12px]">
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                    <HiStar className="text-yellowColor w-[18px] h-5" />
                                </div>
                            </div>
                        </div>
                        <p className="text-[16px] leading-7 text-textColor font-[400]">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam,
                            quod, quaerat, quasi, quidem, quibusdam.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Testimonial;
