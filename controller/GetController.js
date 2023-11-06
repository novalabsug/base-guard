import Company from "../models/Company.js";
import { IsValidObjectId } from "../models/index.js";
import { TryCatch } from "../utils/utils.js";

// private function to fetch a company by its id
export const fetchCompanyGet = TryCatch(async (req, res) => {
  const companyId = req.params.id;

  if (!companyId || !IsValidObjectId.isValid(companyId))
    throw new Error("Missing required data or data is of incorrect format");

  const company = await Company.findOne({ _id: companyId });

  if (!company) throw Error(`Company with id ${companyId} not found`);

  res.status(200).json({ status: "success", data: company });
});
