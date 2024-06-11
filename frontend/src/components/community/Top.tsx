// components/Top.js
import { Button } from "@/components/ui/button";
import BuscadorPerfil from "./BuscadorPerfil"; // Cambia esto para importar BuscadorPerfil

const Top = ({ className = "" }) => {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-md ${className}`}>
      <div className="flex items-center">
        <Button>Publicar</Button>
        <BuscadorPerfil />
        <p className="text-sm ml-4 mt-2">Recientes</p>
        <p className="text-sm ml-4 mt-2">Amigos</p>
        <p className="text-sm ml-4 mt-2">Descubrir</p>
      </div>
    </div>
  );
};

export default Top;
