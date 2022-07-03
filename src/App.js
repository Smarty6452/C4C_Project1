import React from "react";
import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Admin from "./components/Admin_Dashboard/admin";
import Employeedashboard from "./components/EmployeeDashboard/employeedashboard";
import Addemployee from "./components/AddEmployee/addemployee";
// import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      {/* // <Sidebar /> */}
      
    
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/employeedashboard" element={<Employeedashboard />} />
            <Route path="/addemployee" element={<Addemployee/>} />
          </Routes>
       
      
    </>
  );
}
