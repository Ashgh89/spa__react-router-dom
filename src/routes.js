import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";
import BlogPage from "./pages/BlogPage";
import Blog from "./components/Blog";

const routes = [
  { path: "/", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUsPage />, id: 2 },
  { path: "/contact/*", element: <ContactUs />, id: 3 },
  { path: "/blogs", element: <BlogPage />, id: 4 },
  { path: "/blogs/:id", element: <Blog />, id: 5 },
  { path: "*", element: <NotFound />, id: 6 },
];

export default routes;

// :id (: semi colon makes your id dynamic)
