import React from "react";
import { Badge } from "../../ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobCards = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/description/${job._id}`)}
      className="p-5 rounded-md shadow-xl shadow-[#D6C9F0] bg-white border border-gray-100 cursor-pointer"
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>

        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>

      {/* Title and Description */}

      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-gray-600 text-sm">{job?.description}</p>
      </div>

      {/* Badge ---> */}

      <div className="flex items-center gap-2 mt-4">
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
    </div>
  );
};

export default LatestJobCards;
