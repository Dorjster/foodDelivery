import { Router } from "express";
import { createUserService } from "../../controllers/user/creatUser";

export const router = Router();

router.post("/signup", createUserService);

export default router;
