import React, { useEffect } from "react";
import JobPlace from "../Jobs/JobPlace";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/store/jobslice";
import useGetAllJobs from "../../hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();

  const { allJobs } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setSearchedQuery(""));
    };
  }, []);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-6">
          Search Results ({allJobs.length})
        </h1>

        <div className="grid grid-cols-3 gap-4">
          {allJobs.map((job) => {
            return <JobPlace key={job._id} job={job} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Browse;
