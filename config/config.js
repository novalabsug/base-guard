import mongoose from "mongoose";
import chalk from "chalk";

const env = process.env.NODE_ENV;

export const connectToDb = async () => {
  try {
    const DB_URI = process.env.MONGODB_URI;

    const conn = await mongoose.connect(DB_URI);

    env === "development" &&
      console.log(
        chalk.greenBright(`MongoDb database connected: ${conn.connection.host}`)
      );
  } catch (error) {
    env == "development" &&
      console.log({ mongoDbError: chalk.red("MongoDb connection failed") });

    return error.MongooseServerSelectionError;
  }
};
