import { createFoodQuery } from "../../queries/food/createFoodQuery";
import { Request, Response } from "express";

export const createFoodController = async (req: Request, res: Response) => {
  try {
    const food = await createFoodQuery(req);
    res.send(food);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
