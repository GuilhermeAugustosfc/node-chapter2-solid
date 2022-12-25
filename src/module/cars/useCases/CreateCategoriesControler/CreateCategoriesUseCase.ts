import {
  CategoryDTO,
  CategoriesRepository,
} from "../../repository/CategoriesRepository";

class CreateCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ description, name }: CategoryDTO) {
    if (!description || !name) {
      throw new Error("Invalid params");
    }

    return this.categoriesRepository.create({
      description,
      name,
    });
  }
}

export { CreateCategoriesUseCase };
