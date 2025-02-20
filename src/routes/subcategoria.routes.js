import { Router } from "express";
import { getSubcategorias } from "../controllers/subcategoria.controller.js";
import { createSubcategoria } from "../controllers/subcategoria.controller.js";

const router = Router();

// Ruta para obtener todas las subcategorías
router.get("/subcategorias", getSubcategorias);

// Ruta para registrar una nueva subcategoría
router.post("/subcategorias", createSubcategoria);

export default router;
