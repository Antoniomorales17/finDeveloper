import React from "react";
import ServiceList from "../components/Services/ServiceList";

const Services = () => {
    return (
       
        <section>
        <div className="container">
            <div className="xl:w-[470px] mx-auto">
                <h2 className="heading text-center">
                    Nuestros servicios
                </h2>
                <p className="text__para text-center">
                    Disponemos de las ultimas tendencias tecnologicas que dominan el mercado
                </p>
            </div>

            <ServiceList />
        </div>
    </section>
    )
}

export default Services