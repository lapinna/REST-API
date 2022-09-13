import express from "express";
import { connectionToMongo } from "./utils/connectionToDB.js";
import birdRouter from "./routes/birdRoute.js";
import catRouter from "./routes/catRoute.js";
import dogRouter from "./routes/dogRoute.js";
import favoritePlaceRouter from "./routes/favoritePlaceRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", birdRouter);
app.use("/api", catRouter);
app.use("/api", dogRouter);
app.use("/api", favoritePlaceRouter);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});
