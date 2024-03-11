import { Request, Response } from "express";
import { userModel } from "../../db/models/user";
import { compareHash, tokenCreate } from "../../utils";

const getUSerByEmail = async (email: string) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

export const loginUserQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUSerByEmail(email);
    if (!user) {
      return "User not found";
    }
    console.log(user);

    const isPassTrue = await compareHash(password, user.password);
    if (!isPassTrue) {
      throw new Error("wrong email or password");
    }
    const token = await tokenCreate(user._id.toString());

    console.log(token);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
