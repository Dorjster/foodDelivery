import { Request, Response } from "express";
import { updatePassQuery } from "../../queries/user/updatePassQuery";

export const updatePass = async (req: Request, res: Response) => {
  try {
    const data = await updatePassQuery(req);

    res.send(data);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
