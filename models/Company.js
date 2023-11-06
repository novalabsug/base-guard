import { Schema, model } from "mongoose";

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Company name is required"],
    },
    address: {
      type: String,
      required: [true, "Company address is required"],
    },
  },
  { timestamps: true }
);

const Company = model("Company", companySchema);

export default Company;
