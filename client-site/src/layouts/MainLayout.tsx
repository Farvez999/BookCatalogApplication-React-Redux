import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="py-16">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
