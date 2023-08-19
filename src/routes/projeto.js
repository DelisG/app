import express from "express";
import ProjetoController from "../controllers/projetoController.js";

const router = express.Router();

router
  .get("/", ProjetoController.getAllProjetos)
  .post("/", ProjetoController.createProjetos)
  .put("/:id", ProjetoController.updateProjetos)
  .get("/:id", ProjetoController.getByIdProjetos)
  .delete("/:id", ProjetoController.deleteProjetos)

export default router;
