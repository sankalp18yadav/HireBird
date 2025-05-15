import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import Partner from "./Partner";
import LatestJobs from "./LatestJobs";
import Testimonials from "./Testimonials";
import FAQ from "../../shared/FAQ";
import Footer from "../../shared/Footer";
import useGetAllJobs from "../../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") navigate("/admin/companies");
  }, []);

  return (
    <div>
      <HeroSection />
      <CategoryCarousel />
      <Partner />
      <LatestJobs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
