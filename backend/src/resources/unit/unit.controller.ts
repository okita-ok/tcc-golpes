import { Request, Response } from "express";
import {
  getAllCompletedUnits,
  getAllUnits,
  getCompletedUnit,
  setUnitAsCompleted,
} from "./unit.services";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const listUnits = async (req: Request, res: Response) => {
  try {
    const units = await getAllUnits();
    res.status(StatusCodes.OK).json(units);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const listCompletedUnits = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const list = await getAllCompletedUnits(userId);
    res.status(StatusCodes.OK).json(list);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const checkIfCompleted = async (req: Request, res: Response) => {
  const { id: unitId } = req.params;
  const { userId } = req.body;

  try {
    const completedUnit = await getCompletedUnit(userId, unitId);
    if (!completedUnit) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    } else {
      console.log(completedUnit);
      res.status(StatusCodes.OK).json(completedUnit);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const markAsCompleted = async (req: Request, res: Response) => {
  const { id: unitId } = req.params;
  const { userId } = req.body;
  try {
    const completedUnit = await setUnitAsCompleted(userId, unitId);
    console.log(completedUnit);
    if (!completedUnit) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    } else {
      console.log(completedUnit);
      res.status(StatusCodes.OK).json(completedUnit);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default {
  listUnits,
  listCompletedUnits,
  checkIfCompleted,
  markAsCompleted,
};
