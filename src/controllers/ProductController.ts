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

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      await this.productService.validateSchema(req.body, true);
      const updatedProduct = await this.productService.update(id, req.body);
      return res.status(200).json(updatedProduct);
    } catch (error: unknown) {
      next(error);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) {
        throw new Error("ID inválido");
      }
      await this.productService.delete(id);
      return res.status(204).send();
    } catch (error: unknown) {
      next(error);
    }
  };
}
