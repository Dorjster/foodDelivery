import { Request, Response } from "express";

import { passwordRecovery } from "../../queries/user/passwordRecovery";

export const forgotPasswordService = async (req: Request, res: Response) => {
  try {
    const user = await passwordRecovery(req);
    res.json(user);
  } catch (error: any) {
    res.send(error.message);
  }
};
