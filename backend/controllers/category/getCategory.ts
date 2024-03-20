import { Request, Response } from "express";

import { getCategory } from "../../queries/category/getCategory";

export const getCategoryController = async (req: Request, res: Response) => {
  try {
    const category = await getCategory(req);
    res.send(category);
  } catch (error: any) {
    res.send(error.message);
  }
};
