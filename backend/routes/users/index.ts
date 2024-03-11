import { Router } from "express";
import { createUserService } from "../../controllers/user/creatUser";
import { loginUserService } from "../../controllers/user/loginUser";
import { forgotPasswordService } from "../../controllers/user/passwordRec";

export const router = Router();

router.post("/signup", createUserService);
router.post("/login", loginUserService);
router.post("/forgot-password", forgotPasswordService);

export default router;
