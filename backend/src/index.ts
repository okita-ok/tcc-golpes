import dotenv from "dotenv";
import express from "express";
import router from "./router";

// ----- CONFIGURACOES -----
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 7777;

// ----- MIDDLEWARES  -----
// app.get("/", (req, res) => {
//   res.send("Teste!");
// });

app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: ${PORT}`);
});
