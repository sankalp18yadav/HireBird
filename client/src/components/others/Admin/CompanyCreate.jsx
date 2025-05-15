import React, { useState } from "react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setSingleCompany } from "../../../store/companySlice";

const CompanyCreate = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // Default value for companyName state
  const [companyName, setCompanyName] = useState("");

  // Access the user from Redux state
  const { user } = useSelector((state) => state.auth);

  const registerNewCompany = async () => {
    if (!user || !user._id) {
      toast.error("User is not authenticated!");
      return;
    }

    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,

        {
          companyName: companyName,
          userId: user._id, // userId being passed from Redux state
        },

        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      // Enhanced error logging
      console.error("Error while registering company:", error);
      toast.error("Failed to register company");
    }
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        {/* Company Name */}

        <Label>Company Name</Label>

        <Input
          type="text"
          className="my-2"
          placeholder="CompanyName, HireBird"
          value={companyName} // Bind input field to state
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <div className="flex items-center gap-2 my-10">
          {/* Cancel Button */}

          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>

          {/* Continue Button */}

          <Button onClick={registerNewCompany} className="cursor-pointer">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CompanyCreate;
