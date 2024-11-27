import { Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { LoginDto, SignUpDto } from "./auth.types";
import { createUser, findUserbyEmail } from "../user/user.services";
import { UserTypes } from "../userType/userType.constants";
import { checkCredentials } from "./auth.services";

const signup = async (req: Request, res: Response) => {
  const user = req.body as SignUpDto;
  try {
    if (await findUserbyEmail(user.email)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const newUser = await createUser({
        ...user,
        userTypeId: UserTypes.USER,
      });
      res.status(StatusCodes.CREATED).json(newUser);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const login = async (req: Request, res: Response) => {
  const creds = req.body as LoginDto;
  try {
    const user = await checkCredentials(creds);
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    } else {
      req.session.uid = user.id;
      req.session.userTypeId = user.userTypeId;
      res.status(StatusCodes.OK).send(ReasonPhrases.OK);
    }
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
};

const logout = async (req: Request, res: Response) => {
  if (!req.session.uid)
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
  else
    req.session.destroy((err) => {
      if (err) console.log(err);
      res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
    });
};

export default { signup, login, logout };
