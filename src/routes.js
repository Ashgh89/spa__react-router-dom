import HomePage from "./pages/HomePage";

const routes = [
  { path: "/", element: <HomePage />, exact: true, id: 1 },
  { path: "/about-us", element: <HomePage />, id: 2 },
  { path: "/contact", element: <HomePage />, id: 3 },
];

export default routes;
