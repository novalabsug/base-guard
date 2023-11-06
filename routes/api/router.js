import express from "express";

const route = express.Router();

route.get("/hello", (req, res) => {
  res.send("Hello world from company");
});

export default route;
