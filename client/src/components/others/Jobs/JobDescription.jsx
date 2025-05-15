import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/store/jobslice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.auth);

  const isInitiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant == user?._id
    ) || false;

  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);

        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };

        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const params = useParams();

  const jobId = params.id;

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));

          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant == user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md">
      {/* Header */}

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold">{singleJob?.title}</h1>

          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <img
              src={singleJob?.company?.logo}
              alt="Company Logo"
              className="w-12 h-12 object-contain rounded-md"
            />

            <span className="font-medium text-blue-600">
              {singleJob?.company?.name}
            </span>

            <span className="flex items-center text-sm gap-1">
              <MapPin className="w-4 h-4" /> {singleJob?.city},{" "}
              {singleJob?.country}
            </span>
          </div>

          {/* Badge---> */}

          <div className="flex gap-2 mt-3 flex-wrap">
            <Badge>{singleJob?.workMode}</Badge>
            <Badge variant="outline" className=" bg-red-300">
              {singleJob?.jobType}
            </Badge>
            <Badge variant="outline" className=" bg-green-300">
              {singleJob?.salary} LPA
            </Badge>
            <Badge variant="outline" className=" bg-orange-300">
              {singleJob?.experience} Years
            </Badge>
            <Badge variant="outline" className=" bg-gray-300">
              {singleJob?.opening} Position
            </Badge>
          </div>
        </div>

        {/* Apply Button */}

        <div className="flex gap-2">
          <Button className="rounded-lg text-gray-500 bg-[#ffffff] hover:text-[#ffffff] cursor-pointer">
            <Link to="/jobs">
              <span>Back</span>
            </Link>
          </Button>

          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg cursor-pointer 
          ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-amber-600 hover:bg-amber-700"
          }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>

        {/* Back Button */}
      </div>

      {/* About the Role */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About this role</h2>
        <p className="text-gray-700 whitespace-pre-line">{singleJob?.about}</p>
      </div>

      {/* Qualifications */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Qualification</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {singleJob?.qualification}
        </p>
      </div>

      {/* Responsibilities */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {singleJob?.responsibilities}
        </p>
      </div>

      {/* Requirements */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
        <p className="text-gray-700 whitespace-pre-line">
          {Array.isArray(singleJob?.requirements)
            ? singleJob.requirements.join(", ")
            : singleJob?.requirements}
        </p>
      </div>

      {/* Total Applicants */}

      <div className="mb-5 mt-10 flex items-center gap-2 ">
        <Users className="w-5 h-5 text-gray-600" />

        <p className="text-sm text-gray-500">
          {singleJob?.applications?.length} <span>Applicants</span>
        </p>

        <CalendarDays className="w-5 h-5 text-gray-600" />

        <p className="text-sm text-gray-500">
          <span>Posted on </span>
          {singleJob?.createdAt?.split("T")[0]}
        </p>
      </div>

      {/* Posted Date */}
      <div className="mb-6 mt-3 flex items-center gap-2"></div>
    </div>
  );
};

export default JobDescription;
