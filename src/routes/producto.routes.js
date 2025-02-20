import { Router } from "express";
import { getProductos, createProducto,updateProducto } from "../controllers/producto.controller.js";
import multer from "multer"; // Asegúrate de importar multer
const router = Router();

// Configuración de multer para manejar la subida de imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); // Nombre único para evitar conflictos
    }
});

const upload = multer({ storage: storage });

// Obtener todos los productos
router.get("/productos", getProductos);

// Crear un nuevo producto
router.post("/productos", upload.single("prod_image"), createProducto);

router.put("/productos/:id", upload.single("prod_image"), updateProducto);

export default router;
