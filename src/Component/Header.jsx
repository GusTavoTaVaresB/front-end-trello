import medvetlogo from "../assets/tlogo.svg";
import userLogo from "../assets/user.svg";
import uniLogo from "../assets/unilogo.svg";
import { useNavigate } from "react-router-dom";
import FTT from "../images/logoftt.png";


export default function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header-container justify-between grid grid-cols-2 w-screen items-center shadow-md p-5">
        <img
          onClick={() => navigate("")}
          className="logoftt"
          src={medvetlogo}
          alt="logo"
        />

        <div className="perfil-container flex justify-end items-center ">
          <img src={FTT} alt="foto do usuario" className="ftt w-36 " />
          <div className="uni-container flex w-1/4 justify-end">
            <img src={uniLogo} alt="logo da universidade" />
          </div>
        </div>
      </div>
    </>
  );
}
