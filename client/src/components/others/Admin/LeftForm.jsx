import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";

const ALLOWED_COUNTRIES = [
  "Armenia",
  "Argentina",
  "Australia",
  "Belgium",
  "Brazil",
  "Bulgaria",
  "Canada",
  "Chile",
  "Crotia",
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
  "Saudi Arbia",
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
  "Zimababwe",
];

const LeftForm = ({
  input,
  companies,
  handleInputChange,
  handleCompanyChange,
  handleSelectChange,
  JOB_TYPES,
  WORK_MODES,
}) => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      {companies.length > 0 && (
        <div className="flex flex-col gap-2">
          <Label>Select Company</Label>

          <Select onValueChange={handleCompanyChange}>
            <SelectTrigger className="w-full mt-2 cursor-pointer">
              <SelectValue placeholder="Select a Company" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                {companies.map((company) => (
                  <SelectItem
                    className="cursor-pointer"
                    key={company._id}
                    value={company.name.toLowerCase()}
                  >
                    {company.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      <InputBlock
        id="title"
        label="Title"
        value={input.title}
        onChange={handleInputChange}
      />

      <InputBlock
        id="salary"
        label="Salary"
        value={input.salary}
        onChange={handleInputChange}
        type="number"
        placeholder="Salary LPA"
      />

      <InputBlock
        id="experience"
        label="Experience (Years)"
        value={input.experience}
        onChange={handleInputChange}
        type="number"
        placeholder="Years"
      />

      <div className="flex flex-col gap-2">
        <Label>Country</Label>

        <Select
          value={input.country}
          onValueChange={(value) => handleSelectChange("country", value)}
        >
          <SelectTrigger className="w-full mt-2 cursor-pointer">
            <SelectValue placeholder="Select a Country" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              {ALLOWED_COUNTRIES.map((name) => (
                <SelectItem key={name} value={name} className="cursor-pointer">
                  {name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <InputBlock
        id="city"
        label="City"
        value={input.city}
        onChange={handleInputChange}
      />

      <SelectBlock
        label="Job Type"
        value={input.jobType}
        items={JOB_TYPES}
        onChange={(v) => handleSelectChange("jobType", v)}
      />

      <InputBlock
        id="opening"
        label="Number of Openings"
        value={input.opening}
        onChange={handleInputChange}
        type="number"
      />

      <SelectBlock
        label="Work Mode"
        value={input.workMode}
        items={WORK_MODES}
        className="cursor-pointer"
        onChange={(v) => handleSelectChange("workMode", v)}
      />

      <InputBlock
        id="description"
        label="Description"
        value={input.description}
        onChange={handleInputChange}
        type="text"
      />
    </div>
  );
};

const InputBlock = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={id}>{label}</Label>

    <Input
      id={id}
      name={id}
      value={value}
      type={type}
      onChange={onChange}
      placeholder={placeholder || label}
    />
  </div>
);

const SelectBlock = ({ label, value, items, onChange }) => (
  <div className="flex flex-col gap-2">
    <Label>{label}</Label>

    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full mt-2 cursor-pointer">
        <SelectValue placeholder={`Select ${label}`} />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item} value={item} className="cursor-pointer">
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
);

export default LeftForm;
