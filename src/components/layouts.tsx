import Footer from "./footer";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import React from "react";

const Layouts = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Outlet />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default Layouts;
