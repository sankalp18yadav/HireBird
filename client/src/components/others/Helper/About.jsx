import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Partner from "../Home/Partner";
import Footer from "../../shared/Footer";
import OurTeam from "./OurTeam";
import JobProcess from "./JobProcess";
import RecruiterProcess from "./RecruiterProcess";
import { useSelector } from "react-redux";
import TestimonialSection from "../Home/Testimonials";

const About = () => {
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="space-y-2">
      {/* About Section */}

      <section className="text-center py-12">
        {/* Header */}

        <h1 className="text-5xl font-bold text-[#d30c0c]">
          About
          <br />
          <span className="text-[#6C5CE7] text-4xl">Hire</span>
          <span className="text-gray-800 text-4xl">Bird</span>
        </h1>

        {/* Description on Header */}

        <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600">
          JobHub is your trusted platform that bridges the gap between talent
          and opportunity. We help professionals find jobs that matter and
          employers discover the right talent.
        </p>
      </section>

      {/* Mission & Vision Section */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-[#d30c0c] text-2xl">
              Our Mission
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-gray-700">
              To empower job seekers and employers by providing a comprehensive
              platform that simplifies the job search and hiring process. Our
              mission is to create a seamless experience that enhances career
              growth and helps businesses thrive.
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-[#d30c0c] text-2xl">
              Our Vision
            </CardTitle>
          </CardHeader>

          <CardContent>
            <p className="text-gray-700">
              To revolutionize how people connect with opportunities by creating
              a dynamic, inclusive ecosystem where talent meets opportunity,
              empowering success across industries.
            </p>
          </CardContent>
        </Card>
      </section>

      <OurTeam />

      <TestimonialSection />

      {user && user.role == "recruiter" ? (
        <>
          <RecruiterProcess />
        </>
      ) : (
        <>
          <JobProcess />
        </>
      )}
      <Partner />

      <Footer />
    </div>
  );
};

export default About;
