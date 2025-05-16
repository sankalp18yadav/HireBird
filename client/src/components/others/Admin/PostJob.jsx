import React, { useState, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Button } from "../../ui/button";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const LeftForm = lazy(() => import("./LeftForm"));
const RightForm = lazy(() => import("./RightForm"));
const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
const WORK_MODES = ["Remote", "On-site", "Hybrid"];

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    about: "",
    qualification: "",
    responsibilities: "",
    requirements: "",
    salary: "",
    experience: "",
    country: "",
    city: "",
    jobType: "",
    opening: "",
    workMode: "",
    companyId: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { companies } = useSelector((store) => store.company);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompanyChange = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );

    if (selectedCompany) {
      setInput((prev) => ({ ...prev, companyId: selectedCompany._id }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      console.log("Submitting job input:", input);

      const res = await axios.post(
        `${JOB_API_END_POINT}/post`,
        input,

        {
          headers: {
            "Content-Type": "application/json",
          },

          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full flex justify-center my-5">
      {/* form */}

      <form
        onSubmit={handleSubmit}
        className="p-8 max-w-4xl w-full border border-gray-200 shadow-lg rounded-md"
      >
        {/* Heading */}

        <h2 className="text-5xl font-bold mb-4 text-center text-[#d30c0c]">
          Create <span className="text-[#393939]">Job</span>
        </h2>

        <div className="flex gap-6">
          <Suspense fallback={<div>Loading form...</div>}>
            <LeftForm
              input={input}
              companies={companies}
              handleInputChange={handleInputChange}
              handleCompanyChange={handleCompanyChange}
              handleSelectChange={handleSelectChange}
              JOB_TYPES={JOB_TYPES}
              WORK_MODES={WORK_MODES}
            />

            <RightForm input={input} handleInputChange={handleInputChange} />
          </Suspense>
        </div>

        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4 cursor-pointer">
            Post New Job
          </Button>
        )}

        {companies.length === 0 && (
          <p className="text-xs text-red-600 font-bold text-center my-3">
            *Please register a company first before posting any job.
          </p>
        )}
      </form>
    </div>
  );
};

export default PostJob;