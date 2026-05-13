import { validate } from "class-validator";
import { Product } from "../entities/Product.js";
import { AppDataSource } from "../data-source.js";

export class ProductService {
  private productRepository = AppDataSource.getRepository(Product);

  validateSchema = async (data: Partial<Product>, partial = false) => {
    const temp = this.productRepository.create(data);
    const errors = await validate(temp, { skipMissingProperties: partial });
    if (errors.length > 0) {
      throw errors;
    }
  };

  listAll = async () => {
    return await this.productRepository.find();
  };

  create = async (name: string, quantity: number, price: number) => {
    const data = { name, quantity, price };

    await this.validateSchema(data);
    const product = this.productRepository.create(data);
    return await this.productRepository.save(product);
  };
}
