import { foodModel } from "../../db/models";
import { Request } from "express";

export const createFoodQuery = async (req: Request) => {
  const { name, price, image, ingredient } = req.body;
  try {
    const result = await foodModel.create({ name, price, image, ingredient });
    return result._id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
