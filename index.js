import express from "express";
import { connectionToMongo } from "./utils/connectionToDB.js";

const app = express();
const port = 3000;

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});
