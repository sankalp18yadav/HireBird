import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import { Label } from "../../ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/store/jobslice";

const filterData = [
  {
    filterType: "Job Type",
    array: ["Full-Time", "Part-Time", "Internship", "Contract"],
  },

  {
    filterType: "Experience",
    array: ["0-1 Years", "1-2 Years", "3-5 Years", "5+ Years"],
  },

  {
    filterType: "Salary",
    array: ["0-10 LPA", "10-30 LPA", "30-60 LPA", "60+ LPA"],
  },

  {
    filterType: "Company",
    array: ["Google", "Microsoft", "Air India", "KIA"],
  },

  {
    filterType: "Work Type",
    array: ["Hybrid", "On-site", "Remote"],
  },

  {
    filterType: "Country",
    array: ["Canada", "France", "Germany", "India", "USA"],
  },
];

const FilterCards = ({ resetSignal }) => {
  const [selectedFilter, setSelectedFilter] = useState({
    filterType: "",
    value: "",
  });

  const dispatch = useDispatch();

  const changeHandler = (value, filterType) => {
    setSelectedFilter({ filterType, value });
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedFilter));
  }, [selectedFilter]);

  useEffect(() => {
    if (resetSignal) {
      setSelectedFilter({ filterType: "", value: "" });
    }
  }, [resetSignal]);

  return (
    <div className="w-full max-w-sm bg-white p-5 rounded-md h-[89vh] overflow-x-hidden">
      <h1 className="font-bold text-lg mb-2">Filter Jobs</h1>

      <hr className="mb-4" />

      <div>
        {filterData.map((data, index) => (
          <div key={index} className="mb-3">
            <h1 className="font-semibold text-sm mb-3">{data.filterType}</h1>

            <RadioGroup
              value={
                selectedFilter.filterType === data.filterType
                  ? selectedFilter.value
                  : ""
              }
              onValueChange={(value) => changeHandler(value, data.filterType)}
              className="space-y-1"
            >
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;

                return (
                  <div className="flex items-center gap-3 mb-0" key={itemId}>
                    <RadioGroupItem
                      value={item}
                      id={itemId}
                      className="scale-95  cursor-pointer"
                    />

                    <Label htmlFor={itemId} className="text-sm">
                      {item}
                    </Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCards;
