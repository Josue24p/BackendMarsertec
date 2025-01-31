import { Router } from "express";
import { getContactos } from "../controllers/contacto.controller";

const router = Router();

// Ruta para obtener los contactos
router.get('/contacto', getContactos)

export default router