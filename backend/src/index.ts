import dotenv from "dotenv";
import express from "express";

import session from "./middlewares/session";
import router from "./router";

// ----- CONFIGURACOES -----
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 7777;

// ----- MIDDLEWARES  -----
app.use(session());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
