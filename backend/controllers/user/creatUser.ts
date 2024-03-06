import { Request, Response } from "express";
import { createUserQuery } from "../../queries/user/createUserQuery";

export const createUserService = async (req: Request, res: Response) => {
  try {
    const user = await createUserQuery(req);
    res.json(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
