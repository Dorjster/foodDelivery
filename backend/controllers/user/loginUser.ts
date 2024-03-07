import { Request, Response } from "express";
import { loginUserQuery } from "../../queries/user/loginUserQuery";

export const loginUserService = async (req: Request, res: Response) => {
  try {
    const user = await loginUserQuery(req);
    res.json(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
