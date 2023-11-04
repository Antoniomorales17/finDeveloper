import React from "react";
import { useParams } from "react-router-dom";
import DeveloperDetail from './../components/DeveloperDetail';
import { devs } from "./../assets/data/devs.js";

const DevelopersDetails = () => {
  const { id } = useParams();
  const selectedDev = devs.find((dev) => dev.id === parseInt(id, 10));

  if (!selectedDev) {
    return <div>Desarrollador no encontrado.</div>;
  }

  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-bold mb-6">Detalles del Desarrollador</h1>
      <DeveloperDetail dev={selectedDev} />
    </div>
  );
};

export default DevelopersDetails;
