import { Router } from "express";
import unitController from "./unit.controller";

const router = Router();

router.get("/", unitController.listUnits);
router.get("/completed", unitController.listCompletedUnits);
router.post("/:id/check", unitController.checkIfCompleted);
router.post("/:id/completed", unitController.markAsCompleted);

export default router;
