import { Request, Response } from "express";
import {
  createUser,
  findUserbyEmail,
  getAllUsers,
  getUser,
  removeUser,
  updateUser,
} from "./user.services";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateUserDto, UpdateUserDto } from "./user.types";

const index = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.status(StatusCodes.OK).json(users);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const user = req.body as CreateUserDto;
    if (!(await findUserbyEmail(user.email))) {
      const newUser = await createUser(user);
      res.status(StatusCodes.CREATED).json(newUser);
    } else {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const read = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } else {
      res.json(user);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    const updatedData = req.body as UpdateUserDto;
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
    } else {
      if (!(await findUserbyEmail(updatedData.email))) {
        // verificacao se o novo email ja esta sendo utilizado
        const updatedUser = await updateUser(id, updatedData);
        res.json(updatedUser);
      } else {
        if (user.email === updatedData.email) {
          // caso o email novo seja igual ao email antigo
          const updatedUser = await updateUser(id, updatedData);
          res.json(updatedUser);
        } else {
          res.status(StatusCodes.CONFLICT).send(ReasonPhrases.CONFLICT);
        }
      }
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (!user) {
      res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    } else {
      const removedUser = await removeUser(id);
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

export default { index, create, read, update, remove };
