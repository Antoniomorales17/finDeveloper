import React, { useState } from "react";
import Modal from "react-modal";
import { devs } from "./../assets/data/devs.js";
import { BsStarFill, BsStarHalf, BsStar,  } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


Modal.setAppElement("#root"); // Reemplaza "#root" con el ID de tu elemento raíz en el HTML

const Developers = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(parseFloat(e.target.value));
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const renderStarRating = (avgRating) => {
    // Función para renderizar la puntuación con estrellas
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
      <div className="flex items-center gap-1">{stars}</div>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí debes agregar la lógica para enviar el formulario

    // Muestra una notificación de éxito
    toast.success("El formulario se ha enviado con éxito.", {
      position: "top-right",
      autoClose: 3000,
    });
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
        Nuestros Developers
      </h1>
      <div className="flex justify-center mb-4">
        Contamos con diferentes perfiles, todos con gran reputación dentro de la comunidad. Tomate tu tiempo y elije a tu Dev preferido.
      </div>
      <div className="flex justify-center mb-4">
        {/* Tu código para los selectores de filtro */}
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {devs
          .filter((dev) => selectedSpecialty === "All" || dev.specialty === selectedSpecialty)
          .filter((dev) => selectedRating === 0 || dev.avgRating >= selectedRating)
          .filter((dev) => selectedCountry === "All" || dev.country === selectedCountry)
          .map((dev) => (
            <li key={dev.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={dev.photo} alt={dev.name} className="w-full h-48 object-cover" />
              <h2 className="text-lg lg:text-xl font-semibold p-4">{dev.name}</h2>
              <p className="text-gray-600 p-4">
                <span
                  className={`bg-[#CCF0F3] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded text-${dev.specialty === "React JS" ? "#61DAFB" : dev.specialty === "NodeJS" ? "#68A063" : "auto"
                  }`}
                >
                  {dev.specialty}
                </span>
              </p>
              <p className="text-gray-600 p-4">Puntuación: {renderStarRating(dev.avgRating)}</p>
              <p className="text-gray-600 p-2">Total Rating: {dev.totalRating}</p>
              <p className="text-gray-600 p-2">Proyectos Totales: {dev.totalProjects}</p>
              <p className="text-gray-600 p-2">Pais: {dev.country}</p>
              <p className="text-gray-600 p-2">Last Company: {dev.lastCompany}</p>
              <div className="flex items-center justify-center p-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700"
                  onClick={openModal} // Abre el modal al hacer clic
                >
                  <FiMail className="mr-2" />
                  Contactar
                </button>
              </div>
            </li>
          ))}
      </ul>
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

export default Developers;
