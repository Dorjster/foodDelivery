import { Request, Response } from "express";

import { getCategories } from "../../queries/category/getCategories";

export const getCategoriesController = async (req: Request, res: Response) => {
  try {
    const category = await getCategories(req);
    res.send(category);
  } catch (error: any) {
    res.send(error.message);
  }
};
