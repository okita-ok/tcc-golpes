import { Router } from "express";
import userRouter from "../resources/user/user.router";

const router = Router();

router.use("/user", userRouter);

export default router;
