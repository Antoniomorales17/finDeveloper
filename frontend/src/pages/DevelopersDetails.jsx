import React from "react";
import { useParams } from "react-router-dom"; // Importa useParams para obtener el ID del desarrollador desde la URL
import DevCard from './../components/Devs/DevCard'; // Importa DevCard desde la ubicación relativa
import { devs } from "./../assets/data/devs.js"; // Importa tus datos de desarrolladores

const DevelopersDetails = () => {
  const { id } = useParams(); // Obtiene el ID del desarrollador desde la URL
  const selectedDev = devs.find((dev) => dev.id === parseInt(id, 10)); // Busca el desarrollador por ID

  if (!selectedDev) {
    return <div>Desarrollador no encontrado.</div>; // Maneja el caso en que el desarrollador no se encuentre
  }

  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">Detalles del Desarrollador</h1>
      <DevCard dev={selectedDev} /> {/* Muestra los detalles del desarrollador seleccionado */}
    </div>
  );
}

export default DevelopersDetails;
