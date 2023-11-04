import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ContactModal from "./ContactModal";

const DeveloperDetail = ({ dev }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={dev.photo} alt={dev.name} className="w-full h-48 object-cover" />
            <h2 className="text-lg lg:text-xl font-semibold p-4">{dev.name}</h2>
            <p className="text-gray-600 p-4">
                <span
                    className={`bg-[#CCF0F3] py-1 px-2 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded text-${dev.specialty === "React JS" ? "#61DAFB" : dev.specialty === "NodeJS" ? "#68A063" : "auto"}`}
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
            {/* Modal de contacto */}
            <ContactModal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                developerName={dev.name}
            />
        </div>
    );
};

export default DeveloperDetail;
