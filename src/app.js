import express from "express";
import cors from "cors";
import contactoRoutes from "./routes/contacto.routes.js";
import subcategoriaRoutes from "./routes/subcategoria.routes.js"; 
import productoRoutes from "./routes/producto.routes.js";
const path = require('path'); 

const app = express();

app.use(cors());
app.use(express.json()); // Permite recibir JSON en el body de las peticiones

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));
console.log('Archivos estáticos servidos desde:', path.join(__dirname, 'uploads'));



// ✅ Ruta principal (Debe responder en `http://localhost:4000/`)
app.get("/", (req, res) => {
  console.log("Se recibió una solicitud GET en /");
  res.send("¡Bienvenido a mi API! 🚀");
});

// ✅ Usar las rutas de contacto (Debe responder en `http://localhost:4000/contacto`)
app.use("/admin/contacto", contactoRoutes);

app.use("/admin", subcategoriaRoutes);  // Ahora responde en http://localhost:4000/admin/subcategorias

//Usar rutas de producto
app.use("/admin", productoRoutes);

// Captura rutas no encontradas (Error 404)
app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

export default app;