import React from "react";
import BuscadorPerfil from "./BuscadorPerfil"; // Asegúrate de importar correctamente BuscadorPerfil

const Top = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-md ${className}`}>
      <div className="flex justify-center">
        <BuscadorPerfil />
      </div>
    </div>
  );
};

export default Top;
