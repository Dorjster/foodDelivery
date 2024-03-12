// checkPass.ts
import { Request, Response } from "express";
import { userModel } from "../../db/models/user/index";

const getUserByEmail = async (email: string) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

export const checkPassQuery = async (req: Request) => {
  const { code, email } = req.body;
  try {
    const user = await getUserByEmail(email);

    if (user?.otp === code) {
      await userModel.updateOne({ email: user?.email }, { $set: { otp: "" } });
      return "success";
    } else {
      return "invalid code";
    }
  } catch (er: any) {
    throw new Error(er.message);
  }
};
