import expressSession from "express-session";
import { v4 as uuidV4 } from "uuid";

function session() {
  return expressSession({
    genid: () => uuidV4(),
    secret: process.env.SESSION_SECRET!,
    resave: true,
    saveUninitialized: true,
    cookie: { httpOnly: true, maxAge: 1000 * 60 * 30 },
  });
}

export default session;
