import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
