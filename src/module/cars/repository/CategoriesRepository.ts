import { Category } from "../model/Category";
import { ICategoryRepository } from "../model/ICategoryRepository";

interface CategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public create({ name, description }: Category) {
    const newCategory = new Category();
    Object.assign(newCategory, name, description);
    this.categories.push(newCategory);
    return newCategory;
  }

  public list(): Category[] {
    return this.categories;
  }

  public findById(id: string): Category {
    return this.categories.find((cate) => cate.id == id);
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }
}

export { CategoriesRepository, CategoryDTO };
