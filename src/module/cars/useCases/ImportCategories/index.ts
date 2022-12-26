import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ImportCategorieControler } from "./ImportCategorieControler";
import { ImportCategorieUseCase } from "./ImportCategorieUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategorieUseCase = new ImportCategorieUseCase(categoriesRepository);
const importCategorieControler = new ImportCategorieControler(
  importCategorieUseCase
);

export { importCategorieControler };
