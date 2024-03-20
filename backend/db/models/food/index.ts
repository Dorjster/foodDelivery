import { model, Schema, models, Model } from "mongoose";

export type FoodModelType = {
  _id: Schema.Types.ObjectId;
  name: string;

  image: string;
  ingredient: string;

  price: string;
};

const FoodSchema = new Schema<FoodModelType>(
  {
    name: { type: String, required: true },

    image: { type: String, required: true },
    ingredient: { type: String, required: true },

    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const foodModel: Model<FoodModelType> =
  models["Foods"] || model("Foods", FoodSchema);
