import React from "react";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";

const fields = [
  { name: "about", label: "About", placeholder: "About Job" },
  {
    name: "qualification",
    label: "Qualification",
    placeholder: "Required Qualifications",
  },
  {
    name: "responsibilities",
    label: "Responsibilities",
    placeholder: "Role Responsibility",
  },
  {
    name: "requirements",
    label: "Requirements",
    placeholder: "Skills (For e.g.- HTML, CSS, etc)",
  },
];

const RightForm = ({ input, handleInputChange }) => {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      {fields.map(({ name, label, placeholder }) => (
        <div key={name}>
          <Label htmlFor={name}>{label}</Label>

          <Textarea
            id={name}
            name={name}
            value={input[name]}
            onChange={handleInputChange}
            className="my-1 h-39"
            placeholder={placeholder}
          />
        </div>
      ))}
    </div>
  );
};

export default RightForm;
