import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserTypes } from "../resources/userType/userType.constants";

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.uid || req.session.userTypeId !== UserTypes.ADMIN) {
    res.status(StatusCodes.FORBIDDEN).send(ReasonPhrases.FORBIDDEN);
  } else next();
};

export default isAdmin;
