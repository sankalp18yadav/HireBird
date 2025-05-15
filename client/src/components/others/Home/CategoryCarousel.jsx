import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../../ui/carousel";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/store/jobslice";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "Graphic Designer",
  "UI/UX Designer",
  "Product Designer",
  "DevOps Engineer",
  "Mobile Developer",
  "Cloud Engineer",
  "Cyber Security",
  "Game Developer",
  "Data Scientist",
  "Data Analyst",
];
const CategoryCarousel = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const searchJobHandler = (title) => {
    dispatch(setSearchedQuery({ filterType: "Title", value: title }));
    navigate("/browse");
  };

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-15">
        <CarouselContent>
          {category.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/3 ">
              <Button
                onClick={() => searchJobHandler(item)}
                variant="outline"
                className="rounded-full bg-[#ffffff] text-[#000000] cursor-pointer hover:text-[#ffffff] border-2 border-[#d2ceda]"
              >
                {item}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" cursor-pointer border-2" />

        <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer border-2" />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
