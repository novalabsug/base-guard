import { Schema, Types, model } from "mongoose";

const logSchema = new Schema(
  {
    log: String,
    user: Types.ObjectId,
    actions: String,
    type: {
      enum: ["system", "user"],
      required: true,
    },
  },
  { timestamps: true }
);

const Log = model("Log", logSchema);

export default Log;
