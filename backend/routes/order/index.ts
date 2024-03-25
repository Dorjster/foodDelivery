import { Router } from "express";

import { CreateOrderController } from "../../controllers";
import { GetOrderController } from "../../controllers/order/getOrder";

export const OrderRouter = Router();

OrderRouter.post("/order", CreateOrderController);
OrderRouter.get("/get-order", GetOrderController);
