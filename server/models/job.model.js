import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    about: {
      type: String,
    },

    qualification: {
      type: String,
    },

    responsibilities: {
      type: String,
    },

    requirements: {
      type: [String],
    },

    salary: {
      type: Number,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    country: {
      type: String,
      enum: [
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
      ],
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    jobType: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Internship"],
      required: true,
    },

    opening: {
      type: Number,
      required: true,
    },

    workMode: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid"],
      required: true,
    },

    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    applications: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Application",
      },
    ],
  },

  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
