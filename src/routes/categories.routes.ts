import { Router } from "express";
import multer from "multer";
import { createCategoriesControler } from "../module/cars/useCases/CreateCategories";
import { importCategorieControler } from "../module/cars/useCases/ImportCategories";
import { listCategoriesControler } from "../module/cars/useCases/ListCategories";

const catogoriesRoutes = Router();

const upload = multer({ dest: "./temp" });
catogoriesRoutes.post("/", createCategoriesControler.handler);

catogoriesRoutes.get("/", listCategoriesControler.handler);
catogoriesRoutes.get(
  "/import",
  upload.single("file"),
  importCategorieControler.handler
);

export { catogoriesRoutes };
