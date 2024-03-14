import { Request } from "express";
import { userModel, UserModelType } from "../../db/models/user";
import { passwordHash, tokenCreate } from "../../utils";

export const createUserQuery = async (req: Request): Promise<string> => {
  try {
    const { name, email, phone, password } = req.body;

    const hash = passwordHash(password);

    const user = await userModel.create({
      name,
      email,
      phone,
      password: hash,
    });

    if (!user) {
      throw new Error("User creation failed");
    }

    const token = await tokenCreate(user._id.toString());

    return token;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
