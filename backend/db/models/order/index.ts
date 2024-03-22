import { Model, model, Schema, models } from "mongoose";

export type OrderModelType = {
  _id: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  ordernumber: number;
  foods: [Schema.Types.ObjectId];
  totalPrice: string;
  process: string;
  address: string;
  nemelt: string;
};

const OrdreSchema = new Schema<OrderModelType>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
    ordernumber: { type: Number, required: true },
    foods: { type: [Schema.Types.ObjectId], ref: "Foods", required: true },
    totalPrice: { type: String, required: true },
    process: { type: String, required: true },
    address: { type: String, required: true },
    nemelt: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const OrderModel: Model<OrderModelType> =
  models["Orders"] || model("Orders", OrdreSchema);
