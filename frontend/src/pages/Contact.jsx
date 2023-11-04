import React from "react";

const Contact = () => {
  return (
    <div className="p-4 lg:p-8">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-6">
        Contacta con nosotros
      </h1>
      <p className="text__para text-center">
            ¿ Tienes dudas? Nuestro equipo se pondra en contacto contigo en el menor tiempo posible
                </p>
      <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
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
          <p>Puedes contactarnos a través de:</p>
          <a
            href="https://www.linkedin.com/in/antoniomoralesgimenez/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Antoniomorales17"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
