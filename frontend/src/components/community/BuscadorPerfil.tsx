import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { fetchUserById } from "@/services/api";

const BuscadorPerfil = () => {
  const [userId, setUserId] = useState("");
  const [userDetails, setUserDetails] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setError(null);
    setUserDetails(null);
    if (userId.trim() === "") {
      setError("Please enter a valid user ID.");
      return;
    }

    try {
      const user = await fetchUserById(Number(userId));
      setUserDetails(user);
    } catch (error) {
      setError("User not found.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative flex items-center">
        <FaSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="Enter user ID..."
          className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {userDetails && (
        <div className="mt-4 p-4 border rounded-lg shadow-md">
          <p><strong>ID:</strong> {userDetails.Usuario_id}</p>
          <p><strong>Nombre:</strong> {userDetails.Nombre_y_apellidos}</p>
          <p><strong>Username:</strong> {userDetails.Username}</p>
          <p><strong>Correo:</strong> {userDetails.Correo_electronico}</p>
          <p><strong>Edad:</strong> {userDetails.Edad}</p>
          <p><strong>Presentación:</strong> {userDetails.Presentacion}</p>
          <p><strong>Sexo:</strong> {userDetails.Sexo}</p>
          <p><strong>Seguidores:</strong> {userDetails.Num_seguidores}</p>
          <p><strong>Seguidos:</strong> {userDetails.Num_seguidos}</p>
          <p><strong>Fecha de nacimiento:</strong> {userDetails.Fecha_de_nacimiento}</p>
          {/* Agrega más campos si es necesario */}
        </div>
      )}
    </div>
  );
};

export default BuscadorPerfil;
