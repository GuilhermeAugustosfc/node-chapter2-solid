import { Category } from "../../model/Category";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

ListCategoriesUseCase;
class ListCategoriesControler {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handler(): Category[] {
    return this.listCategoriesUseCase.execute();
  }
}

export { ListCategoriesControler };
