import { AiOutlinePicture } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { GoProjectRoadmap } from "react-icons/go";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";

export const navItem = [
    {
        id:1,
        icon: <AiOutlinePicture/>
        title: 'Quadro'
    },
    {
        id:2,
        icon: <FiUsers/>
        title: 'Membros'
    },
    {
        id:3,
        icon: <GoProjectRoadmap/>
        title: 'Relatório'
    },
    {
        id:4,
        icon: <PiProjectorScreenChart/>
        title: 'Projeto'
    },
    {
        id:5,
        icon: <IoSettingsOutline/>
        title: 'Configurações'
    }
   
]