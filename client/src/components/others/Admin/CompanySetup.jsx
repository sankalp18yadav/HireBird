import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import useGetCompanyById from "../../hooks/useGetCompanyById";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

const CompanySetup = () => {
  const params = useParams();

  useGetCompanyById(params.id);

  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    city: "",
    country: "",
    file: null,
  });

  const { singleCompany } = useSelector((store) => store.company);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const countryList = [
    "Armenia",
    "Argentina",
    "Australia",
    "Belgium",
    "Brazil",
    "Bulgaria",
    "Canada",
    "Chile",
    "Croatia",
    "Czech Republic",
    "Denmark",
    "Egypt",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Ghana",
    "Greece",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Ireland",
    "Italy",
    "Japan",
    "Jordan",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Mexico",
    "Morocco",
    "Mozambique",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Peru",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "Saudi Arabia",
    "Serbia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "UAE",
    "UK",
    "USA",
    "Vietnam",
    "Zambia",
    "Zimbabwe",
  ];

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("city", input.city);
    formData.append("country", input.country);

    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);

      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,

        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      city: singleCompany.city || "",
      country: singleCompany.country || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div className="max-w-xl mx-auto my-10">
      {/* form */}

      <form onSubmit={submitHandler}>
        <div className="flex items-center gap-5 p-8">
          {/* Company Name */}

          <Button
            onClick={() => navigate("/admin/companies")}
            variant="outline"
            className="flex items-center gap-2 text-gray-500 font-semibold cursor-pointer"
          >
            <ArrowLeft />

            <span>Back</span>
          </Button>

          <h1 className="font-bold text-xl">Company Setup</h1>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Company Name */}

          <div>
            <Label htmlFor="name">Company Name</Label>

            <Input
              id="name"
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          {/* Company Description */}

          <div>
            <Label htmlFor="description">Description</Label>

            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          {/* Company Website */}

          <div>
            <Label htmlFor="website">Website</Label>

            <Input
              type="text"
              name="website"
              value={input.website}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          {/* Company City */}

          <div>
            <Label htmlFor="city">City</Label>

            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
              className="mt-2"
            />
          </div>

          {/* Company Country */}

          <div>
            <Label htmlFor="country">Country</Label>

            <Select
              value={input.country}
              onValueChange={(value) =>
                setInput((prev) => ({ ...prev, country: value }))
              }
            >
              {/* Select a Country */}

              <SelectTrigger className="w-full mt-2 cursor-pointer">
                <SelectValue placeholder="Select a Country" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  {countryList.map((country) => (
                    <SelectItem
                      key={country}
                      value={country}
                      className="cursor-pointer"
                    >
                      {country}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Company Logo */}

          <div>
            <Label htmlFor="logo">Logo</Label>

            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="mt-2 cursor-pointer"
            />
          </div>
        </div>

        {/* Update Button */}

        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-full my-4 cursor-pointer">
            Update
          </Button>
        )}
      </form>
    </div>
  );
};

export default CompanySetup;
