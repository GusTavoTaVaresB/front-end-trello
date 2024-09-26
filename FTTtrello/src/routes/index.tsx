import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Analysis from "../pages/Analysis";
import Members from "../pages/Members";
import Notifications from "../pages/Notifications";
import Calendar from "../pages/Calendar";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "quadros",
				element: <Boards />,
			},
			{
				path: "projetos",
				element: <Projects />,
			},
			{
				path: "analise",
				element: <Analysis />,
			},
			{
				path: "membros",
				element: <Members />,
			},
			{
				path: "notificacoes",
				element: <Notifications />,
			},
			{
				path: "calendario",
				element: <Calendar />,
			},
		],
	},
];

export default routes;
