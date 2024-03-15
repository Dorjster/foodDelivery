import { foodModel } from "../../db/models";
import { Request } from "express";

export const getFoodQuery = async (req: Request) => {
  const { filter = {} } = req.body;
  try {
    const allFoods = await foodModel.find(filter);
    return allFoods;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
