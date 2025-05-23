import { Company } from "../models/company.model.js";
import getDataUri from "../config/datauri.js";
import cloudinary from "../config/cloudinary.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required.",
        success: false,
      });
    }

    let company = await Company.findOne({ name: companyName });

    if (company) {
      return res.status(400).json({
        message: "You can't register same company.",
        success: false,
      });
    }

    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully.",
      company,
      success: true,
    });
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({
      message: "Internal server error.",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id

    const companies = await Company.find({ userId });

    if (!companies) {
      return res.status(404).json({
        message: "Companies not found.",
        success: false,
      });
    }

    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

// get company by id

export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//Update Company

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, country, city } = req.body;

    // Check if the new name already exists for another company

    const existingCompany = await Company.findOne({
      name,
      _id: { $ne: req.params.id },
    });

    if (existingCompany) {
      return res.status(400).json({
        message: "Company name already in use. Please choose a different name.",
        success: false,
      });
    }

    const updateData = { name, description, website, country, city };

    // Only update logo if a file is uploaded

    if (req.file) {
      const fileUri = getDataUri(req.file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      updateData.logo = cloudResponse.secure_url;
    }

    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!company) {
      return res.status(404).json({
        message: "Company not found.",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information updated successfully.",
      success: true,
      data: company,
    });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(500).json({
      message: "An error occurred while updating the company.",
      success: false,
    });
  }
};
