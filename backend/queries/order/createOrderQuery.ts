import { Request, Response } from "express";
import { foodModel, OrderModel, userModel } from "../../db";

import { ORDER_PROCESS } from "../../status";

// const getfoodPrice = async (foodIds: string[]) => {
//   const prices = Promise.all(
//     foodIds.map(async (el) => {
//       const result = await foodModel.findById({ _id: el });
//       return result?.price;
//     })
//   );
//   console.log(prices, "price");
//   return prices;
// };

export const CreateOrderQuery = async (req: Request) => {
  const { userId, foods, address, nemelt, une } = req.body;

  try {
    const isUserExist = await userModel.findById({ _id: userId });
    if (!isUserExist) {
      throw new Error("User not found");
    }

    const earlytoday = new Date();
    earlytoday.setHours(0, 0, 0, 0);

    const now = new Date();

    const howManyAreThere = await OrderModel.countDocuments({
      createdAt: {
        $gte: earlytoday,
        $lte: now,
      },
    });

    // const totalPrice = await getfoodPrice(foods);

    // const sumOfTotalPrice = totalPrice.reduce(
    //   (accumulator: number, currentValue) => accumulator + Number(currentValue),
    //   0
    // );
    // console.log(totalPrice, "totalPrice");
    // console.log(sumOfTotalPrice, "sumtotalPrice");

    const result = await OrderModel.create({
      userId,
      foods,
      address,
      nemelt,
      ordernumber: howManyAreThere + 1,
      totalPrice: une,
      process: ORDER_PROCESS.PENDING,
    });
    return result;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
