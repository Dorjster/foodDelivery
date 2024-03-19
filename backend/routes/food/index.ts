import { Router } from "express";
import { getFoodController } from "../../controllers/food";
import { createFoodController } from "../../controllers/food";

export const FoodRouter = Router();

FoodRouter.post("/foods", getFoodController);

FoodRouter.post("/create-food", createFoodController);
