import { Router } from "express";
import userRouter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.router";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);

export default router;
