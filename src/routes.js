import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUsPage />, id: 2 },
  { path: "/contact", element: <ContactUs />, id: 4 },
];

export default routes;
