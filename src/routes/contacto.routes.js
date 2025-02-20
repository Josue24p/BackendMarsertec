import { Router } from "express";
import { getContactos, createContacto } from "../controllers/contacto.controller.js";

const router = Router();

// Ruta para obtener todos los contactos (GET /contacto)
router.get("/", getContactos);

// Ruta para insertar un nuevo contacto (POST /contacto)
router.post("/", createContacto);

export default router;