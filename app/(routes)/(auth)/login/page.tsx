import React from "react";

export default function page() {
  return (
    <div className="h-svh bg-gradient-to-r from-indigo-300 to-purple-400 flex items-center justify-center font-sans">
      <div className="bg-white p-8 rounded-lg w-1/3">
        <h2 className="text-3xl text-center">Inicio de <span className="text-purple-600 uppercase">sesión</span></h2>
        <form action="">
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-4 ">
              <label htmlFor="" className="text-lg">Correo Electronico</label>
              <input type="text" className="py-2 px-4 rounded-sm border border-purple outline-none"/>
            </div>
            <div className="flex items-center justify-center">
              <button className="bg-purple-600 text-white rounded-lg py-2 px-4">Iniciar sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
