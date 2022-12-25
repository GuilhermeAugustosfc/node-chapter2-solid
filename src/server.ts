import express from "express";
import { catogoriesRoutes } from "./routes/categories.routes";

const app = express();
app.use(express.json());
app.use("/categories", catogoriesRoutes);
app.listen(3333);
