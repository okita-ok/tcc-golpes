import { Router } from "express";
import unitController from "./unit.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.get("/", unitController.listUnits);
router.get("/completed", checkAuth, unitController.listCompletedUnits);
router.get("/:id", checkAuth, unitController.checkIfCompleted);
router.post("/:id", checkAuth, unitController.markAsCompleted);

export default router;
