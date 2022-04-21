import SideBar from "../components/SideBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Downloads from "../components/Downloads";

const ContactUs = () => {
  return (
    <>
      <p>Tel: 2575524934762</p>;
      <SideBar />
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="downloads" element={<Downloads />} />
      </Routes>
    </>
  );
};
export default ContactUs;
