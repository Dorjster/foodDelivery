import { Router } from "express";
import { createUserService } from "../../controllers/user/creatUser";
import { loginUserService } from "../../controllers/user/loginUser";
import { forgotPasswordService } from "../../controllers/user/passwordRec";
import { CheckPass } from "../../controllers/user/checkPass";
import { updatePass } from "../../controllers/user/updatePassword";

export const router = Router();

router.post("/signup", createUserService);
router.post("/login", loginUserService);
router.post("/forgot-password", forgotPasswordService);
router.post("/check-code", CheckPass);
router.post("/updatePass", updatePass);

export default router;
