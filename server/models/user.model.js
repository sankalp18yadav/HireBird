import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z\s]+$/.test(v);
        },
        message: (props) => `${props.value} is not a valid name!`,
      },
      minLength: [3, "Name must be at least 3 characters long"],
      maxLength: [50, "Name must be at most 50 characters long"],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid email!`,
      },
      minLength: [5, "Email must be at least 5 characters long"],
      maxLength: [50, "Email must be at most 50 characters long"],
    },

    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },

    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },

    role: {
      type: String,
      enum: ["candidate", "recruiter"],
      required: true,
    },

    profile: {
      bio: {
        type: String,
      },

      skills: [
        {
          type: String,
        },
      ],

      resume: {
        type: String,
      },

      resumeOriginalName: {
        type: String,
      },

      company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Company",
      },

      profilePicture: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
