import {
  AppsOutline,
  HomeOutline,
  LogOutOutline,
  NewspaperOutline,
  PeopleOutline,

} from "react-ionicons";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  const navLinks = [
    { title: "Início", icon: <HomeOutline color="#555" width="22px" height="22px" />, to: "/" },
    { title: "Quadros", icon: <AppsOutline color="#555" width="22px" height="22px" />, to: "/quadros" },
    { title: "Membros", icon: <PeopleOutline color="#555" width="22px" height="22px" />, to: "/membros" },
    { title: "Calendário", icon: <NewspaperOutline color="#555" width="22px" height="22px" />, to: "/calendario" },
  ];

  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-[#fff]">
        <span className="text-[#002379] font-semibold text-2xl md:block hidden">Trello</span>
        <span className="text-[#002379] font-semibold text-2xl md:hidden block">L.</span>
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-[#fff] py-5 md:px-3 px-3 relative">
        {navLinks.map((link) => (
          <Link
            to={link.to}
            key={link.title}
            className={`flex items-center gap-2 w-full rounded-lg px-2 py-3 cursor-pointer ${location.pathname === link.to ? 'bg-blue-100 text-[#002379] font-semibold' : 'bg-transparent text-[#555]'} hover:bg-blue-200`}
          >
            {link.icon}
            <span className="font-medium text-[15px] md:block hidden">{link.title}</span>
          </Link>
        ))}
        <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-blue-200 px-2 py-3 cursor-pointer bg-gray-200">
          <LogOutOutline color="#555" width="22px" height="22px" />
          <span className="font-medium text-[15px] md:block hidden">Sair</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
