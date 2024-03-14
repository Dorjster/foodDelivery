import { Request, Response } from "express";
import { getLoggedInUser } from "../../queries/user/getLoggedinUser";

export const getLoggedInUserController = async (
  req: Request,
  res: Response
) => {
  try {
    const user = await getLoggedInUser(req);

    if (!user) {
      res.status(404).send("User not found");
      return;
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
