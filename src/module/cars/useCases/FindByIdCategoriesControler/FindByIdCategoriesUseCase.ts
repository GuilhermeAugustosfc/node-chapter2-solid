import { Category } from "../../model/Category";
import { CategoriesRepository } from "../../repository/CategoriesRepository";

class FindByIdCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(id: string): Category {
    return this.categoriesRepository.findById(id);
  }
}

export { FindByIdCategoriesUseCase };
