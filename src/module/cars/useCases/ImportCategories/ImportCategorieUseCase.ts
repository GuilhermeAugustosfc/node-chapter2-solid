import { CategoriesRepository } from "../../repository/CategoriesRepository";

CategoriesRepository;
class ImportCategorieUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute(file: any) {
    // file.
    // this.categoriesRepository.create(file)
  }
}

export { ImportCategorieUseCase };
