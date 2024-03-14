import { foodModel } from "../../db/models";
import { Request } from "express";

export const getFoodQuery = async () => {
  try {
    const allFoods = await foodModel.find();
    return allFoods;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
