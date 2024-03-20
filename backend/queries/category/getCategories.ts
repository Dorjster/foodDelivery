import { Request } from "express";
import { categoryModel } from "../../db/models";

export const getCategories = async (req: Request) => {
  const categories = await categoryModel.find();

  const newCategories = categories.map((item) => {
    return { name: item.name, id: item._id };
  });

  return categories;
};
