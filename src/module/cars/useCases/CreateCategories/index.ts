import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { CreateCategoriesControler } from "./CreateCategoriesControler";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";
const categoriesRepository = CategoriesRepository.getInstance();
const categoriesUseCase = new CreateCategoriesUseCase(categoriesRepository);
const createCategoriesControler = new CreateCategoriesControler(
  categoriesUseCase
);

export { createCategoriesControler };
