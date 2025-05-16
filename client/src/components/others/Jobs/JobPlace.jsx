import React from "react";
import { Button } from "../../ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "../../ui/badge";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/Photo/logo.webp";

const JobPlace = ({ job }) => {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);

    const currentTime = new Date();

    const timeDifference = currentTime - createdAt;

    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };

  return (
    <div className="p-5 mx-rounded-md shadow-xl shadow-[#D6C9F0] bg-white border border-purple-100">
      {/* Company Created Date Comes Here ---> */}

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) == 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>

        <Button
          variant="outline"
          className="rounded-full cursor-pointer"
          size="icon"
        >
          <Bookmark />
        </Button>
      </div>

      {/* Compant Logo Comes Here ---> */}

      <div className="flex items-center gap-2 my-2">
        <Button className="p-0 bg-transparent hover:bg-transparent">
          <div className="h-10 w-18 flex items-center justify-center border rounded-md overflow-hidden">
            <img
              src={job?.company?.logo || logo}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = logo;
              }}
              alt="Company Logo"
              className="h-full w-full object-contain"
            />
          </div>
        </Button>

        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">{job?.location}</p>
        </div>
      </div>

      {/* Title and Description Here ---> */}

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>

      {/* Badge Here ---> */}

      <div className="flex flex-wrap items-center gap-2 mt-4">
        <Badge className={"bg-purple-100 text-purple-700"} variant="ghost">
          {job?.workMode}
        </Badge>

        <Badge className={"bg-slate-100 text-slate-800"} variant="ghost">
          {job?.jobType}
        </Badge>

        <Badge className={"bg-green-100 text-green-700"} variant="ghost">
          {job?.salary} LPA
        </Badge>
      </div>

      {/* Buttons Here ---> */}

      <div className="flex flex-wrap items-center gap-4 mt-4">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="cursor-pointer"
        >
          Details
        </Button>

        <Button className="bg-[#5a5a5c] cursor-pointer">Save for Later</Button>
      </div>
    </div>
  );
};

export default JobPlace;