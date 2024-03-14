import { Request, Response } from "express";
import { getFoodQuery } from "../../queries/food/getFoodQuery";

export const getFoodController = async (req: Request, res: Response) => {
  try {
    const food = await getFoodQuery();
    res.json(food);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};
