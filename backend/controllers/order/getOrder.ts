import { Request, Response } from "express";
import { getOrder } from "../../queries/order/getOrder";

export const GetOrderController = async (req: Request, res: Response) => {
  try {
    const result = await getOrder();
    res.status(200).send(result);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
};
