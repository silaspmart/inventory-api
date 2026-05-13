import { ProductService } from "../services/ProductService.js";
import type { Request, Response, NextFunction } from "express";

export class ProductController {
  private productService = new ProductService();

  list = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.productService.listAll();
      return res.json(products);
    } catch (error: unknown) {
      next(error);
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, quantity, price } = req.body;
      const newProduct = await this.productService.create(
        name,
        quantity,
        price
      );
      return res.status(201).json(newProduct);
    } catch (error: unknown) {
      next(error);
    }
  };
}
