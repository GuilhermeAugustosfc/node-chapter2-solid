import {
  CategoriesRepository,
  CategoryDTO,
} from "../../repository/CategoriesRepository";
import fs from "fs";
import { parse as csvParse } from "csv-parse";

class ImportCategorieUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}
  loadCsv(file: Express.Multer.File): Promise<CategoryDTO[]> {
    return new Promise((resolver, reject) => {
      const categories: CategoryDTO[] = [];
      const stream = fs.createReadStream(file.path);
      const parserFile = csvParse();
      stream.pipe(parserFile);

      parserFile
        .on("data", async (line) => {
          const { name, description } = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolver(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCsv(file);
  }
}

export { ImportCategorieUseCase };
