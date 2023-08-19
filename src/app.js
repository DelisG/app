import express, { json } from "express";
import index from "./routes/index.js";
import db from "./config/dbConnect.js";
import projetos from "./routes/projeto.js";
import chalk from "chalk";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use("/", index);
app.use("/projetos", projetos);

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log(
    chalk.white.bgRgb(255, 0, 127).bold("Conexão com o banco feita com sucesso")
  );
});

export default app;
