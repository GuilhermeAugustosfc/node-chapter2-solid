import express from "express";
import { catogoriesRoutes } from "./routes/categories.routes";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger.json";
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/categories", catogoriesRoutes);

app.listen(3333);
