import express from "express";
import cors from "cors";
import contactoRoutes from "./routes/contacto.routes.js";

const app = express();

app.use(cors());
app.use(express.json()); // Permite recibir JSON en el body de las peticiones

// ✅ Ruta principal (Debe responder en `http://localhost:4000/`)
app.get("/", (req, res) => {
  console.log("Se recibió una solicitud GET en /");
  res.send("¡Bienvenido a mi API! 🚀");
});

// ✅ Usar las rutas de contacto (Debe responder en `http://localhost:4000/contacto`)
app.use("/admin/contacto", contactoRoutes);

// Captura rutas no encontradas (Error 404)
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

export default app;