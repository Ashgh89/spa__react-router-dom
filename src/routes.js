import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUsPage />, id: 2 },
  { path: "/contact", element: <ContactUs />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
];

export default routes;
