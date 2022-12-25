import { Router } from "express";
import { createCategoriesControler } from "../module/cars/useCases/CreateCategoriesControler";
import { listCategoriesControler } from "../module/cars/useCases/ListCategoriesControler";

const catogoriesRoutes = Router();
catogoriesRoutes.post("/", createCategoriesControler.handler);
catogoriesRoutes.get("/", listCategoriesControler.handler);

export { catogoriesRoutes };
