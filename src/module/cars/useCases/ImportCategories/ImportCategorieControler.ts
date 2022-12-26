import { Request, Response } from "express";
import { ImportCategorieUseCase } from "./ImportCategorieUseCase";

ImportCategorieUseCase;
class ImportCategorieControler {
  constructor(private importCategorieUseCase: ImportCategorieUseCase) {}

  handler(request: Request, response: Response) {
    const { file } = request;
    this.importCategorieUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategorieControler };
