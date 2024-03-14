import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel, UserModelType } from "../../db/models/user";

interface DecodedToken {
  userId: string;
}

export const getLoggedInUser = async (req: Request) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) throw new Error("Not logged in");

    const decoded = jwt.verify(token, "secret") as DecodedToken;

    const user = await userModel.findOne({ _id: decoded.userId });

    if (!user) throw new Error("User not found");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error((error as Error).message);
  }
};
