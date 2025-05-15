import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  
  {

    name: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
    },

    website: {
      type: String,
      match: [
        /^https?:\/\/.+\..+/,
        "Please enter a valid website URL (e.g., https://example.com)",
      ],
    },

     country: {
      type: String,
      enum: ["Armenia", "Argentina", "Australia", "Belgium", "Brazil", "Bulgaria", "Canada", "Chile", "Croatia", "Czech Republic", "Denmark", "Egypt", "Estonia", "Finland", "France", "Germany", "Ghana", "Greece", "Hungary", "Iceland", "India", "Indonesia",
      "Iran", "Ireland", "Italy", "Japan", "Jordan", "Latvia", "Lithuania", "Luxembourg", "Mexico", "Morocco", "Mozambique", "Netherlands", "New Zealand", "Nigeria", "Norway", "Peru", "Poland", "Portugal", "Romania", "Russia", "Saudi Arabia", "Serbia", "Singapore", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Thailand", "UAE", "UK", "USA", "Vietnam", "Zambia", "Zimbabwe"],
    },

    city: {
      type: String,
    },

    logo: {
      type: String,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

  },

  { timestamps: true }

);

export const Company = mongoose.model("Company", companySchema);
