import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import { connectToDb } from "./config/config.js";
import path from "path";
import { fileURLToPath } from "url";
import rfs from "rotating-file-stream";
import morgan from "morgan";
import { ErrorHandler, NotFound } from "./middleware/middleware.js";
import router from "./routes/Router.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// create a rotating write stream
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily`
  path: path.join(__dirname, "logs"),
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

// // connect to database
// await connectToDb();

app.use("/api", router);

app.use(NotFound);
app.use(ErrorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server listening to port: ${PORT}`));
