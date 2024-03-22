import { Request, Response } from "express";
import { CreateOrderQuery } from "../../queries/order/createOrderQuery";

export const CreateOrderController = async (req: Request, res: Response) => {
  try {
    const result = await CreateOrderQuery(req);
    res.send(result);
  } catch (err: any) {
    res.send(err.message);
  }
};
