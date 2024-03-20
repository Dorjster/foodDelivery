import { Request, Response } from "express";
import { createCategory } from "../../queries/category/createCategory";

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await createCategory(req);
    res.send(category);
  } catch (error: any) {
    res.send(error.message);
  }
};
