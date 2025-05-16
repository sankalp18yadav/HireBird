import React, { useEffect, useState } from "react";
import FilterCards from "./FilterCards";
import JobPlace from "./JobPlace";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { setSearchedQuery } from "@/store/jobslice";
import { Button } from "../../ui/button";

const Jobs = () => {
  const dispatch = useDispatch();

  // Get all jobs and current search/filter query from Redux store
  const { allJobs, searchedQuery } = useSelector((store) => store.job);

  // Local state to hold filtered jobs for display
  const [filterJobs, setFilterJobs] = useState([]);

  // Reset signal for filter component
  const [resetSignal, setResetSignal] = useState(false);

  // Reset filters handler
  const handleReset = () => {
    dispatch(setSearchedQuery({ filterType: "", value: "" }));
    setResetSignal(true);
  };

  // Normalize function to compare strings in a uniform way
  const normalize = (str) => str?.toLowerCase().replace(/[-\s]+/g, "") || "";

  // Update filtered jobs whenever allJobs or searchedQuery changes
  useEffect(() => {
    if (!allJobs || allJobs.length === 0) {
      setFilterJobs([]);
      return;
    }

    if (searchedQuery?.value && searchedQuery?.filterType) {
      const filterValue = normalize(searchedQuery.value);

      const filtered = allJobs.filter((job) => {
        switch (searchedQuery.filterType) {
          case "Country":
            return normalize(job.country) === filterValue;

          case "Job Type":
            return normalize(job.jobType) === filterValue;

          case "Experience":
            if (filterValue === "0-1years") return job.experience === 0;
            if (filterValue === "1-2years")
              return job.experience >= 1 && job.experience <= 2;
            if (filterValue === "3-5years")
              return job.experience >= 3 && job.experience <= 5;
            if (filterValue === "5+years") return job.experience > 5;
            return true;

          case "Salary":
            if (filterValue === "0-5lpa") return job.salary <= 5;
            if (filterValue === "5-10lpa")
              return job.salary > 5 && job.salary <= 10;
            if (filterValue === "10-15lpa")
              return job.salary > 10 && job.salary <= 15;
            if (filterValue === "15+lpa") return job.salary > 15;
            return true;

          case "Company":
            return normalize(job?.company?.name) === filterValue;

          case "Work Type":
            return normalize(job.workMode) === filterValue;

          default:
            // Search in title or description if filterType unknown or empty
            return (
              normalize(job.title).includes(filterValue) ||
              normalize(job.description).includes(filterValue)
            );
        }
      });

      setFilterJobs(filtered);
    } else {
      // No filters applied, show all jobs
      setFilterJobs(allJobs);
    }

    setResetSignal(false);
  }, [allJobs, searchedQuery]);

  // Debug logs to track data
  useEffect(() => {
  }, [allJobs, filterJobs, searchedQuery]);

  return (
    <div>
      <div className="max-w-[90%] mx-auto mt-5">
        <div className="flex gap-7">
          {/* Left: Filter Panel */}

          <div style={{ width: "20%" }}>
            <FilterCards resetSignal={resetSignal} />
          </div>

          {/* Right: Job Listings */}

          <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
            <div className="flex justify-between items-center mb-4 px-2">
              <div className="text-gray-700 font-medium">
                {searchedQuery?.value
                  ? `Results: ${filterJobs.length} search found`
                  : `All Jobs (${filterJobs.length})`}
              </div>

              {searchedQuery?.value && (
                <Button
                  onClick={handleReset}
                  className="bg-gray-500 cursor-pointer"
                >
                  Reset Filters
                </Button>
              )}
            </div>

            {/* Job Cards */}

            {filterJobs.length === 0 ? (
              <span>No jobs found</span>
            ) : (
              <div className="grid grid-cols-3 gap-4">
                <AnimatePresence>
                  {filterJobs.map((job) => (
                    <motion.div
                      key={job._id}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    >
                      <JobPlace job={job} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
