// components/BuscadorPerfil.js
const BuscadorPerfil = () => {
    return (
      <div className="ml-4 relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">Search</label>
        <input
          id="search"
          type="text"
          className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
          placeholder="Buscar Perfil..."
        />
      </div>
    );
  };
  
  export default BuscadorPerfil;
  