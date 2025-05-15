import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="max-w-7xl mx-auto my-12">
      <h1 className="text-4xl font-bold text-center">
        <span className="text-gray-800">Top Career Opportunities&nbsp;</span>
        <span className="text-[#6C5CE7]">Just for You</span>
      </h1>

      <div className="grid grid-cols-3 gap-4 my-10">
        {allJobs.length <= 0 ? (
          <span>No Job Available</span>
        ) : (
          allJobs
            ?.slice(0, 6)
            .map((job) => <LatestJobCards key={job._id} job={job} />)
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
