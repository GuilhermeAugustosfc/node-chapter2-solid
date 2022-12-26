import { Request, Response } from "express";
import { FindByIdCategoriesUseCase } from "./FindByIdCategoriesUseCase";
class FindByIdCategoriesControler {
  constructor(private FindByIdCategoriesUseCase: FindByIdCategoriesUseCase) {}

  handler(request: Request, response: Response) {
    const { id } = request.body;
    const category = this.FindByIdCategoriesUseCase.execute(id);

    return response.json({ category });
  }
}

export { FindByIdCategoriesControler };
