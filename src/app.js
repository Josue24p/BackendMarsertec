import express from "express";
import cors from 'cors';
import contactoRoutes from './routes/contacto.routes.js';

const app = express();
app.use(cors()); // Habilita CORS para permitir solicitudes de Angular
app.use(express.json()); // Habilita JSON en las peticiones

// Ruta para insertar un nuevo contacto
app.post("/contactos", (req, res) => {
  const { nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto } = req.body;

  const sql = "INSERT INTO Contacto (nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto) VALUES (?, ?, ?, ?)";
  const values = [nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto];

  conexion.query(sql, values, (error, result) => {
    if (error) {
      res.status(500).json({ error: "Error al insertar contacto" });
      return;
    }
    res.json({ message: "Contacto agregado con éxito", id: result.insertId });
  });
});

app.use(contactoRoutes);


export default app