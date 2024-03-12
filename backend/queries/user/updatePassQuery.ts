// updatePassword.ts
import { Request, Response } from "express";
import { passwordHash } from "../../utils";
import { userModel } from "../../db/models/user";

const getUserByEmail = async (email: string) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

export const updatePassQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return "User not found";
    }
    const hash = await passwordHash(password);

    const updatePass = await userModel.updateOne(
      { email: user.email },
      { $set: { password: hash } }
    );

    return updatePass;
  } catch (error) {
    return "can't update the password";
  }
};
