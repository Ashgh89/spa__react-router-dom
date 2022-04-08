import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

import Layout from "./Layout/Layout";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
// for SPA we need to install react router dom
// so react needs it for SPA
// 1. npm install react-router-dom
// 2. After installiation, let's make 3 components
// 3. (HomePage, AboutUs and NotFound)
// 4. in App.js -> import {BrowserRouter,Routes,Route} from "react-router-dom"
/* 5.  <BrowserRouter>
      <Routes>
        <Route path="" element={<blabla />} />    
      <Routes/>
    </BrowserRouter> */
