import { Request, Response } from "express";
import { getAllUsers } from "./user.services";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const index = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  if (!users)
    return res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
  return res.status(StatusCodes.ACCEPTED).json(users);
};

const create = async (req: Request, res: Response) => {};

const read = async (req: Request, res: Response) => {};

const update = async (req: Request, res: Response) => {};

const remove = async (req: Request, res: Response) => {};

export default { index, create, read, update, remove };
