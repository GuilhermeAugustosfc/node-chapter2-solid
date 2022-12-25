import { CategoriesRepository } from "../../repository/CategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute() {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
