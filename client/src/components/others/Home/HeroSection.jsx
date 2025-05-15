import React, { useState } from "react";
import { Button } from "../../ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/store/jobslice";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10 ">
        {/* Tagline Here ---> */}

        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#-] font-medium cursor-default">
          Discover Your Ideal Career Path
        </span>

        <h1 className="text-5xl font-bold cursor-default">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6C5CE7]">Career Take Flight</span>
        </h1>

        {/* Company Name Here ---> */}

        <p>
          With&nbsp;
          <span className="text-[#6C5CE7] text-bold">Hire</span>
          <span className="text-[#2D3436] text-bold">Bird</span>, take control
          of your job search journey. Explore top companies and apply in
          minutes.
        </p>

        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />

          <Button
            onClick={searchJobHandler}
            className="rounded-r-full bg-[#6C5CE7] cursor-pointer"
          >
            <Search className="h-5 w-5"></Search>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
