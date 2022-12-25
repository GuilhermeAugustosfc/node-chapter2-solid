import { CategoryDTO } from "../repository/CategoriesRepository";
import { Category } from "./Category";

export interface ICategoryRepository {
  create(data: CategoryDTO): Category;
  list(): Category[];
  findById(id: string): Category;
}
