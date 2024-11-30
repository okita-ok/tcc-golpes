import dotenv from "dotenv";
import express from "express";

import cors from "cors";
import session from "./middlewares/session";
import router from "./router";
import logger from "./middlewares/logger";

// ----- CONFIGURACOES -----
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 7777;

// ----- MIDDLEWARES  -----
app.use(logger("simple"));
app.use(cors({ credentials: true, origin: "http://localhost:7171" }));
app.use(session());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
