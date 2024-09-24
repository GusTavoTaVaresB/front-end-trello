import { useLocation } from "react-router-dom";
import { SearchOutline } from "react-ionicons";

const Navbar = () => {
  const location = useLocation();

  // Verificar se a rota atual é a Home ("/")
  if (location.pathname === "/") {
    return null; // Não renderiza o Navbar na Home
  }

  return (
    <div className="md:w-full w-full fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-0 border-b border-slate-300 bg-[#fff]">
      <div className="flex items-center gap-3 cursor-pointer">
      </div>

      {/* Verificar se a rota NÃO é /membros para mostrar a barra de pesquisa */}
      {location.pathname !== "/membros" && (
        <div className="md:w-[750px] w-[130px] bg-gray-100 rounded-lg px-3 py-[8px] flex items-center gap-3">
          <SearchOutline color={"#999"} />
          <input
            type="text"
            placeholder="Pesquisar..."
            className="w-full bg-gray-100 outline-none text-[15px]"
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
