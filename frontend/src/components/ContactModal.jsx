import React from "react";
import Modal from "react-modal";
import { FiMail } from "react-icons/fi";

const ContactModal = ({ isOpen, onRequestClose, developerName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={`Contactar a ${developerName}`}
    >
      <h2>Contactar a {developerName}</h2>
      {/* Agrega un formulario de contacto o información de contacto aquí */}
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default ContactModal;
