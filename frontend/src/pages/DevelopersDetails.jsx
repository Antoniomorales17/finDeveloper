import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { devs } from "./../assets/data/devs.js";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import Modal from "react-modal";


Modal.setAppElement("#root");


const DevelopersDetails = () => {
  const { id } = useParams();
  const selectedDev = devs.find((dev) => dev.id === id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!selectedDev) {
    return <div>Desarrollador no encontrado.</div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Define la función renderStarRating
  const renderStarRating = (avgRating) => {
    const stars = [];
    const fullStars = Math.floor(avgRating);
    const hasHalfStar = avgRating - fullStars >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<BsStarFill key={i} className="text-irisBlueColor" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<BsStarHalf key={i} className="text-irisBlueColor" />);
      } else {
        stars.push(<BsStar key={i} className="text-irisBlueColor" />);
      }
    }

    

    return (
      <div className="flex items-center gap-1">
        {stars}
      </div>
    );
  };

  

  const contactModalContent = (
    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-irisBlueColor mb-4">
        Contactar al desarrollador
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="text-sm md:text-base text-headingColor">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full border border-primaryColor rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="text-sm md:text-base text-headingColor">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-primaryColor rounded-md p-2"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mensaje" className="text-sm md:text-base text-headingColor">
            Mensaje:
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="4"
            className="w-full border border-primaryColor rounded-md p-2"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primaryColor text-white rounded-md px-4 py-2 hover:bg-purpleColor"
        >
          Enviar
        </button>
      </form>

      <div className="mt-6 text-irisBlueColor">
        <a
          href="https://www.linkedin.com/in/antoniomoralesgimenez/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <AiFillLinkedin />
          LinkedIn
        </a>
        <a
          href="https://github.com/Antoniomorales17"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <AiFillGithub />
          GitHub
        </a>
      </div>

      <button
        onClick={closeModal}
        className="mt-4 bg-yellowColor text-white rounded-md px-4 py-2 hover:bg-primaryColor"
      >
        Cerrar
      </button>
    </div>
  );

  return (
    <div className="p-4 lg:p-8">
       <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6">
       Detalles del Desarrollador
      </h1>
      <div className="flex justify-center mb-4">
       Conoce en detalle a nuestros profesionales
      </div>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
        <div className="w-1/2">
          <img src={selectedDev.photo} alt={selectedDev.name} className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-4">
          <h2 className="text-lg lg:text-xl font-semibold mb-2">{selectedDev.name}</h2>
          <p className="text-gray-600 mb-2">
            <span
              className={`bg-[#CCF0F3] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded text-${
                selectedDev.specialty === "React JS"
                  ? "#61DAFB"
                  : selectedDev.specialty === "NodeJS"
                  ? "#68A063"
                  : "auto"
              }`}
            >
              {selectedDev.specialty}
            </span>
          </p>
          <p className="text-gray-600 mb-2">Puntuación: {renderStarRating(selectedDev.avgRating)}</p>
          <p className="text-gray-600 mb-2">Total Rating: {selectedDev.totalRating}</p>
          <p className="text-gray-600 mb-2">Proyectos Totales: {selectedDev.totalProjects}</p>
          <p className="text-gray-600 mb-2">Pais: {selectedDev.country}</p>
          <p className="text-gray-600 mb-2">Última Empresa: {selectedDev.lastCompany}</p>
    
          <div className="flex items-center justify-center p-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
              onClick={openModal} // Abre el modal al hacer clic
            >
              <FiMail className="mr-2" />
              Contactar
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Contactar al desarrollador"
      >
        {contactModalContent}
      </Modal>
    </div>
  );
  
};

export default DevelopersDetails;
