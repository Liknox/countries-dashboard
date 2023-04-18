import { useRoutes } from "react-router-dom"
import { Details } from "../pages/Details"
import { HomePage } from "../pages/HomePage"
import { NotFound } from "../pages/NotFound"

const routes = [
	{ path: "/", element: <HomePage />, exact: true },
	{ path: "/country/:name", element: <Details />, exact: false },
	{ path: "*", element: <NotFound />, exact: false },
]

export function Content() {
	const element = useRoutes(routes)
	return element
}
