import { Router } from "express";
import { createUserService } from "../../controllers/user/creatUser";
import { loginUserService } from "../../controllers/user/loginUser";

export const router = Router();

router.post("/signup", createUserService);
router.post("/login", loginUserService);

export default router;
