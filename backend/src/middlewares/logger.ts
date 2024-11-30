import { Request, Response, NextFunction } from "express";
import { writeFile } from "fs";

type LogType = "complete" | "simple";

function logger(type: LogType) {
  if (type === "simple") {
    return (req: Request, res: Response, next: NextFunction) => {
      const log = `${new Date().toISOString()} ${req.url} ${req.method}\n`;
      writeFile(
        `${__dirname}/../../logs/registros.log`,
        log,
        { flag: "a" },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      next();
    };
  } else {
    return (req: Request, res: Response, next: NextFunction) => {
      const log = `${new Date().toISOString()} ${req.url} ${req.method} ${
        req.httpVersion
      } ${req.get("User-Agent")}\n`;
      writeFile(
        `${__dirname}/../../logs/registros.log`,
        log,
        { flag: "a" },
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
      next();
    };
  }
}

export default logger;
