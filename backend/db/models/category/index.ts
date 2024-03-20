import { model, Schema, models, Model } from "mongoose";

export type CategoryModelType = {
  _id: Schema.Types.ObjectId;
  name: string;
  foodId: Schema.Types.ObjectId[];
};

const CategorySchema = new Schema<CategoryModelType>(
  {
    name: { type: String, required: true },
    foodId: { type: [Schema.Types.ObjectId], ref: "Foods", required: true },
  },
  {
    timestamps: true,
  }
);

export const categoryModel: Model<CategoryModelType> =
  models["Categories"] || model("category", CategorySchema);
