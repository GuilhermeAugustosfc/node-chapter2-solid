import { CategoriesRepository } from "../../repository/CategoriesRepository";
import { FindByIdCategoriesControler } from "./FindByIdCategoriesControler";
import { FindByIdCategoriesUseCase } from "./FindByIdCategoriesUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const findByIdCategoriesUseCase = new FindByIdCategoriesUseCase(
  categoriesRepository
);
const findByIdCategoriesControler = new FindByIdCategoriesControler(
  findByIdCategoriesUseCase
);
export { findByIdCategoriesControler };
