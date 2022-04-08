import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
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
