import { v4 as uuidv4 } from "uuid";
class Category {
  public id?: string;
  public name: string;
  public description: string;
  public create_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4;
      this.create_at = new Date();
    }
  }
}

export { Category };
