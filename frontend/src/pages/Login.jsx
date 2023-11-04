import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primaryBgColor">
      <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-bold text-irisBlueColor mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-sm text-irisBlueColor">
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
            <label htmlFor="password" className="text-sm text-irisBlueColor">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-primaryColor rounded-md p-2"
            />
          </div>

          <button
            type="submit"
            className="bg-primaryColor text-white rounded-md px-4 py-2 hover:bg-purpleColor w-full"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
