import { Request } from "express";
import { categoryModel } from "../../db/models";

export const createCategory = async (req: Request) => {
  const { name, foodIds } = req.body;

  const result = await categoryModel.create({
    name,
    foodId: [...foodIds],
  });

  return result._id;
};
