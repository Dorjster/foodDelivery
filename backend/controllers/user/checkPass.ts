import { Request, Response } from "express";

import { checkPassQuery } from "../../queries/user/checkPassQuery";

export const CheckPass = async (req: Request, res: Response) => {
  try {
    const data = await checkPassQuery(req);
    res.send(data);
  } catch (e: any) {
    res.status(400).send(e.message);
  }
};
