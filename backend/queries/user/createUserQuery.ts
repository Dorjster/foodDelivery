import { Request, Response } from "express";
import { userModel } from "../../db/models/user";
import { passwordHash } from "../../utils";

export const createUserQuery = async (req: Request) => {
  try {
    const { name, email, phone, password } = req.body;

    const hash = passwordHash(password);
    

    const user = await userModel.create({
      name,
      email,
      phone,
      password: hash,
    });
    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
