import Company from "../models/Company.js";
import { TryCatch } from "../utils/utils.js";

// function for creating a new company
export const createCompanyPost = TryCatch(async (req, res) => {
  const { name, address } = req.body;

  if (!name || name == "") throw new Error("Company name is required");
  if (!address || address == "") throw new Error("Company address is required");

  const NewCompany = new Company({
    name,
    address,
  });

  await NewCompany.save();

  res.status(200).json({
    status: "success",
    data: {
      _id: NewCompany._id,
      name: NewCompany.name,
      address: NewCompany.address,
    },
  });
});
