import { RouteObject } from "react-router";
import Layout from "../layout";
import Boards from "../pages/Boards";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Members from "../pages/Members";

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
				path: "membros",
				element: <Members />,
			},
			{
				path: "calendario",
				element: <Calendar />,
			},
		],
	},
];

export default routes;
