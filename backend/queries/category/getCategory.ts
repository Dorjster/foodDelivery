import { Request } from "express";
import { categoryModel } from "../../db/models";

export const getCategory = async (req: Request) => {
  const { id } = req.body;

  const category = await categoryModel.findOne({ _id: id }).populate("foodId");
  return category;
};
