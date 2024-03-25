import { Request } from "express";

import { OrderModel } from "../../db";

export const getOrder = async () => {
  try {
    const orders = await OrderModel.find().populate("userId").populate("foods");
    return orders;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
