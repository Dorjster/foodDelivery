import { Request } from "express";
import { userModel } from "../../db/models/user";
import { compareHash, tokenCreate } from "../../utils";

const getUserByEmail = async (email: string) => {
  const user = await userModel.findOne({ email: email });
  return user;
};

export const loginUserQuery = async (req: Request) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmail(email);
    if (!user) {
      return "User not found";
    }

    const isPasswordCorrect = await compareHash(password, user.password);
    if (!isPasswordCorrect) {
      return "Incorrect email or password";
    }

    const token = await tokenCreate(user._id.toString());

    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
