import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      about,
      qualification,
      responsibilities,
      requirements,
      salary,
      experience,
      country,
      city,
      jobType,
      opening,
      workMode,
      companyId,
    } = req.body;

    const userId = req.id;

    const parsedRequirements =
      typeof requirements === "string"
        ? requirements
            .split(",")
            .map((r) => r.trim())
            .filter(Boolean)
        : [];

    const parsedSalary = Number(salary);
    const parsedExperience = Number(experience);
    const parsedOpening = Number(opening);

    if (
      !title ||
      !description ||
      !about ||
      !qualification ||
      !responsibilities ||
      !parsedRequirements.length ||
      isNaN(parsedSalary) ||
      isNaN(parsedExperience) ||
      !country ||
      !city ||
      !["Full-time", "Part-time", "Contract", "Internship"].includes(jobType) ||
      isNaN(parsedOpening) ||
      !["Remote", "On-site", "Hybrid"].includes(workMode) ||
      !companyId
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled with valid values.",
      });
    }

    const job = await Job.create({
      title,
      description,
      about,
      qualification,
      responsibilities,
      requirements: requirements.split(","),
      salary: Number(salary),
      experience: experience,
      country,
      city,
      jobType,
      opening,
      workMode,
      company: companyId,
      created_by: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Job created successfully",
      job,
    });
  } catch (error) {
    console.error("Job creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
        { country: { $regex: keyword, $options: "i" } },
        { city: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({ path: "company" })
      .sort({ createdAt: -1 });

    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found",
      });
    }

    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;

    const job = await Job.findById(jobId)
      .populate({
        path: "applications",
      })
      .populate({
        path: "company",
      });

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    return res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;

    const jobs = await Job.find({ created_by: adminId }).populate({
      path: "company",
      createdAt: -1,
    });

    if (!jobs) {
      return res.status(404).json({
        success: false,
        message: "Jobs not found",
      });
    }

    return res.status(200).json({
      success: true,
      jobs,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
