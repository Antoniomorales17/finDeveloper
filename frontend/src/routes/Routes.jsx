import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import Error from "../pages/Error";
import Developers from "../pages/Developers";
import DevelopersDetails from "../pages/DevelopersDetails";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/developers" element={<Developers/>} />
      <Route path="/developers:id" element={<DevelopersDetails />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default MyRoutes;
