import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { ListCategoriesControler } from "./ListCategoriesControler";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesControler = new ListCategoriesControler(
  listCategoriesUseCase
);

export { listCategoriesControler };
