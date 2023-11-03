import React, { useState } from "react";
import { devs } from "./../assets/data/devs.js";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FiMail } from "react-icons/fi";


const Developers = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("All");

  const handleSpecialtyChange = (e) => {
    setSelectedSpecialty(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(parseFloat(e.target.value));
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

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

  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6">Nuestros Developers</h1>
      <div className="flex justify-center mb-4">
        Contamos con diferentes perfiles, todos con gran reputación dentro de la comunidad. Tomate tu tiempo y elije a tu Dev preferido.
      </div>
      <div className="flex justify-center mb-4">
        <select
          value={selectedSpecialty}
          onChange={handleSpecialtyChange}
          className="p-2 border border-gray-300 rounded mr-2"
        >
          <option value="All">Tecnologías</option>
          <option value="React JS">React JS</option>
          <option value="NodeJS">NodeJS</option>
          <option value="Python">Python</option>
          <option value="Java">Java</option>
          <option value="Angular">Angular</option>
          <option value="C#">C#</option>
          <option value="Vue.js">Vue.js</option>
          <option value="Swift">Swift</option>
          {/* Agrega más opciones según las tecnologías que tengas */}
        </select>
        <select
          value={selectedRating}
          onChange={handleRatingChange}
          className="p-2 border border-gray-300 rounded mr-2"
        >
          <option value={0}>Puntuación</option>
          <option value={4}>4+ Stars</option>
          <option value={4.5}>4.5+ Stars</option>
          <option value={4.7}>4.7+ Stars</option>
          <option value={4.8}>4.8+ Stars</option>
          <option value={5}>5 Stars</option>
        </select>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="All">Paises</option>
          <option value="Colombia">Colombia</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Russia">Russia</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazil</option>
          <option value="China">China</option>
          {/* Agrega más opciones según los países que tengas */}
        </select>
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
                  <FiMail className="mr-2" />
                  Contactar
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Developers;
