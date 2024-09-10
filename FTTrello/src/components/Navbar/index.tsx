import { useLocation } from "react-router-dom";
import {
	SearchOutline,
} from "react-ionicons";

const Navbar = () => {
	const location = useLocation();

	// Verificar se a rota atual é a Home ("/")
	if (location.pathname === "/") {
		return null; // Não renderiza o Navbar na Home
	}

	return (
		<div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
			<div className="flex items-center gap-3 cursor-pointer">
			</div>
			<div className="md:w-[750px] w-[130px] bg-gray-100 rounded-lg px-3 py-[8px] flex items-center gap-3">
				<SearchOutline color={"#999"} />
				<input
					type="text"
					placeholder="Pesquisar..."
					className="w-full bg-gray-100 outline-none text-[15px]"
				/>
			</div>
		</div>
	);
};

export default Navbar;

