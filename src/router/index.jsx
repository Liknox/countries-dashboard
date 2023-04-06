import { Details } from "../pages/Details";
import { HomePage } from "../pages/HomePage";
import { NotFound } from "../pages/NotFound";

export const routes = [
   { path: "/", component: <HomePage />, exact: true },
   { path: "/country/:name", component: <Details />, exact: false },
   { path: "*", component: <NotFound />, exact: false },
]