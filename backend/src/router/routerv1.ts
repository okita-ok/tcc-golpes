import { Router } from "express";
import userRouter from "../resources/user/user.router";
import authRouter from "../resources/auth/auth.router";
import unitRouter from "../resources/unit/unit.router";

const router = Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/unit", unitRouter);

export default router;
