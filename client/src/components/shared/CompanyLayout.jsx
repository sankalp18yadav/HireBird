import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";

const CompanyLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
};

export default CompanyLayout;
