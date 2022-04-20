import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

function App() {
  // WHAT IF WE HAVE HERE 100 ROUTE? THAT's NOT GOOD
  // LET'S FIX IT BY CREATING A ROUTES.JS FILE
  return (
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </Layout>
  );
}
// The <Switch /> component will only render the first route that matches/includes the path.
// we dont need <Switch></Switch> in react 18 and it is replaced with <Routes></Routes>.

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
