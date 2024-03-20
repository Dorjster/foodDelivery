import { Router } from "express";
import { createCategoryController } from "../../controllers/category/createCategory";
import { getCategoriesController } from "../../controllers/category/getCategories";
import { getCategoryController } from "../../controllers/category/getCategory";

export const CategoryRouter = Router();

CategoryRouter.post("/category", createCategoryController);
CategoryRouter.get("/categories", getCategoriesController);

CategoryRouter.get("/category", getCategoryController);
