import { Request, Response } from "express";
import { CreateCategoriesUseCase } from "./CreateCategoriesUseCase";

class CreateCategoriesControler {
  constructor(private categoriesUseCase: CreateCategoriesUseCase) {}
  handler(request: Request, response: Response) {
    const { name, description } = request.body;
    const data = this.categoriesUseCase.execute({ description, name });
    return response.json(data);
  }
}

export { CreateCategoriesControler };
